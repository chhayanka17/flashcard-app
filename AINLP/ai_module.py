import spacy

print("Loading spaCy model...")
nlp = spacy.load("en_core_web_sm")
print("Model loaded.")

def split_sentences(text):
    doc = nlp(text)
    return [sent.text for sent in doc.sents]

def get_best_keyword(sentence):
    doc = nlp(sentence)
    
    # Step 1: Try Named Entity first
    if doc.ents:
        return doc.ents[0].text, doc.ents[0].label_
    
    # Step 2: Fall back to important noun
    for token in doc:
        if token.pos_ == "NOUN" and not token.is_stop:
            return token.text, "NOUN"
    
    # Step 3: Last resort
    return sentence.split()[0], "NOUN"

def sentence_to_flashcard(sentence):
    keyword, etype = get_best_keyword(sentence)
    
    if etype == "PERSON":
        question = f"Who is {keyword}?"
    elif etype == "DATE":
        question = f"When did {keyword} occur?"
    elif etype == "GPE":
        question = f"What is significant about {keyword}?"
    elif etype == "ORG":
        question = f"What is {keyword}?"
    else:
        question = f"What is {keyword}?"
    
    return {"question": question, "answer": sentence}

def text_to_flashcards(text):
    sentences = split_sentences(text)
    flashcards = []
    for sent in sentences:
        flashcards.append(sentence_to_flashcard(sent))
    return flashcards

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/generate", methods=["POST"])
def generate():
    data = request.get_json()
    text = data.get("notes", "")
    flashcards = text_to_flashcards(text)
    return jsonify(flashcards)

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=5000, debug=True)
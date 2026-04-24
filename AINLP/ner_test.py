import spacy

nlp = spacy.load("en_core_web_sm")

text = """
Albert Einstein developed the theory of relativity.
NASA launched the Apollo mission in 1969.
Photosynthesis is the process by which plants make food.
India gained independence in 1947.
"""

doc = nlp(text)

print("=== Named Entities Found ===")
for ent in doc.ents:
    print(f"Entity: {ent.text} | Type: {ent.label_}")
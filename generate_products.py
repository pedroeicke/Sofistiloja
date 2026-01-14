
import os

directory = 'public/colares'
base_path = '/colares/'
start_id = 100 # Starting ID to avoid conflicts

files = sorted([f for f in os.listdir(directory) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])

print("  // Colares (Novos)")

# Generate Product objects
for i, filename in enumerate(files):
    product_id = str(start_id + i)
    name = f"Colar de Mesa Decorativo {i+1}"
    
    # Simple logic to vary names slightly if needed, but numbering is safest for this amount
    # We could check file size or something but random variation is fine
    
    print(f"  {{ id: '{product_id}', name: '{name}', category: 'colares', image: '{base_path}{filename}' }},")

import json

def extract_module(file_path, module_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        for item in data:
            if item.get('name') == module_name:
                print(json.dumps(item, indent=2))
                return
        print(f"Module '{module_name}' not found.")

if __name__ == "__main__":
    extract_module('modules.json', 'simpulan logis')

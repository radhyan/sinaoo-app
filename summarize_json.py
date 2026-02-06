import json

def summarize_json(file_path):
    with open(file_path, 'r', encoding='utf-8-sig') as f:
        data = json.load(f)
        if isinstance(data, list):
            print(f"List of {len(data)} items")
            for i, item in enumerate(data):
                steps = item.get('steps', [])
                name = item.get('name')
                mid = item.get('_id')
                print(f"{i}: [{mid}] {name} - Steps: {len(steps)}")
        elif isinstance(data, dict):
            print(f"Dictionary with keys: {list(data.keys())}")
            if 'name' in data or 'title' in data:
                 print(f"Name/Title: {data.get('name') or data.get('title')}")
            if 'steps' in data:
                 print(f"Steps count: {len(data['steps'])}")
                 for i, step in enumerate(data['steps']):
                     print(f"  Step {i}: {step.get('title')} ({step.get('type')})")

if __name__ == "__main__":
    with open('modules.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        with open('modules_summary.txt', 'w', encoding='utf-8') as sout:
            if isinstance(data, list):
                sout.write(f"List of {len(data)} items\n")
                for i, item in enumerate(data):
                    steps = item.get('steps', [])
                    name = item.get('name')
                    mid = item.get('_id')
                    sout.write(f"{i}: [{mid}] {name} - Steps: {len(steps)}\n")
            else:
                sout.write("Not a list\n")
    print("Summary saved to modules_summary.txt")

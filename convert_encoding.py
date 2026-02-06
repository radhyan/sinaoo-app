import os

def convert_utf16_to_utf8(file_path, output_path):
    try:
        with open(file_path, 'r', encoding='utf-16le') as f:
            content = f.read()
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully converted {file_path} to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    convert_utf16_to_utf8('module_list.json', 'module_list_utf8.json')
    convert_utf16_to_utf8('mod_id.txt', 'mod_id_utf8.txt')

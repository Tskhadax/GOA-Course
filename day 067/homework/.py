#ცარიელი ფაილების გადამოწმება

import os
import sys

# Change the encoding to UTF-8 to handle emojis
sys.stdout.reconfigure(encoding='utf-8')

def find_empty_files(directory):
    # Convert to absolute path
    directory = os.path.abspath(directory.strip())  # 🔥 Trim spaces

    # Check if the directory exists
    if not os.path.isdir(directory):  # 🔥 Better check for directories
        print(f"❌ Error: The directory '{directory}' does not exist or is not accessible!")
        return

    # Check if the directory is empty
    if not os.listdir(directory):
        print(f"⚠️ Warning: The directory '{directory}' is empty!")
        return

    empty_files_count = 0

    # Walk through the directory
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                if os.path.isfile(file_path) and os.path.getsize(file_path) == 0:  # 🔥 Added isfile() check
                    print(f"📂 Empty file: {file_path}")
                    empty_files_count += 1
            except Exception as e:
                print(f"🚨 Cannot access {file_path}: {e}")

    print(f"\n✅ Total empty files: {empty_files_count}")

# 🔹 Set target directory
target_directory = r"C:\Users\dside\Desktop\GOA-Homeworks"

# 🔹 Run function
find_empty_files(target_directory)
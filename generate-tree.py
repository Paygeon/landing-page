import os

def generate_codebase_structure(directory, output_file):
    with open(output_file, 'w') as f:
        for root, dirs, files in os.walk(directory):
            # Exclude directories
            dirs[:] = [d for d in dirs if d not in ['.next', 'node_modules', 'out']]
            level = root.replace(directory, '').count(os.sep)
            indent = ' ' * 4 * (level)
            f.write('{}{}/\n'.format(indent, os.path.basename(root)))
            subindent = ' ' * 4 * (level + 1)
            for file in files:
                f.write('{}{}\n'.format(subindent, file))

generate_codebase_structure('/workspace/landing-page', '/workspace/landing-page/codebase_structure.txt')

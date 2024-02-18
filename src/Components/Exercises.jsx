from react import jsx;

# For multiple paths, use the JSXTransformer class.
transformer = jsx.JSXTransformer()
for jsx_path, js_path in my_paths:
    transformer.transform(jsx_path, js_path)

# For a single file, you can use a shortcut method.
jsx.transform('path/to/input/file.jsx', 'path/to/output/file.js')
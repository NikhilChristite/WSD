from lxml import etree

# Load the XSL stylesheet
xsl = etree.parse("Transform.html")
transform = etree.XSLT(xsl)

# Apply the XSL stylesheet to the XML data
xml = etree.parse("products.xml")
html = transform(xml)

# Save the transformed HTML
with open("output.html", "wb") as output_file:
    output_file.write(etree.tostring(html, pretty_print=True))

# Load and validate the XML schema
schema = etree.XMLSchema(file="product_schema.xsd")

# Validate the transformed HTML against the schema
if schema.validate(html):
    print("Validation successful")
else:
    print("Validation failed")
    for error in schema.error_log:
        print(f"Error: {error.message}")


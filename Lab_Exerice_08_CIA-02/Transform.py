import lxml.etree as ET

# Load the XML and XSL files
xml = ET.parse('jokes.xml')
xsl = ET.parse('jokes.xslt')

# Create a transformer and apply the transformation
transformer = ET.XSLT(xsl)
result = transformer(xml)

# Save the transformed HTML table to a file
with open('jokes.html', 'wb') as f:
    f.write(result)
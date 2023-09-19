import lxml.etree as ET

# Load the XML and XSD files
xml = ET.parse('jokes.xml')
xsd = ET.parse('jokes.xsd')

# Create a validator and validate the XML data
validator = ET.XMLSchema(xsd)
validator.assertValid(xml)
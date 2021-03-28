# gutenberg-rdf-to-json

Project Gutenberg produces catalog download bundles that contains Resource Description Framework(RDF) files for each of its 53000 plus books.

RDF is an XML-Based format.

Follow below steps to download data 
-----------------------------------

cd data

curl -O http://www.gutenburg.org/cache/epub/feeds/rdf-files.tar.bz2

tar -xvjf rdf-files.tar.bz2

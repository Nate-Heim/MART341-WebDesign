Web browsers act as intermediaries to fetch information from webpages and then translates them. Whether that be JSS css html or images like png and jpg's. The translation process
is the (DOM) or Document Object Model that builds its tree structure, at least I think of it that way. It uses the CSS and JSS to build the page look.

2. Document Object Model is The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. Nodes can have event handlers (also known as event listeners) attached to them. Once an event is triggered, the event handlers get executed. [1] IE it builds your entire website by the data it receives from said page. To put it as
plainly as possible it is the bread and butter of your entire operation the entire 'tree' of how it interacts. Without a proper structure your page won't load and will be a failure.

3. HTML is the structure or layout of your webpage. XML is a markup language that was designed to be a carrier of data honestly at least thats my understanding. XHTML was designed to work with other data formats like XML and to be more strict on making sure you didn't make mistakes. Browsers apparently can ignore issues with HTML but XHTML puts more import on making sure you get it right. The biggest differences between HTML and XHTML are these:

```
<!DOCTYPE> is mandatory
The xmlns attribute in <html> is mandatory
<html>, <head>, <title>, and <body> are mandatory
Elements must always be properly nested
Elements must always be closed
Elements must always be in lowercase
Attribute names must always be in lowercase
Attribute values must always be quoted
Attribute minimization is forbidden
```
[2]

4.  The elements are as follows <!DOCTYPE> declaration, <html> element, then the <head> element/s and finally the <body> this is where we are currently putting most of our time because it contains everything we need.

5. The index page is your default page or homepage kind of like the google image with the search bar is the first thing you see when you go to google.com that is their index.html. It should also ALWAYS be in your root from what I understand since it might cause issues otherwise like not loading things of that nature, and if I'm wrong please let me know.

6. Some of the best naming practices are to give descriptive variable names to both variables functions, files using something like snakecase camelCase and Pascal Case. Always avoid special characters, when putting numbers in your names NEVER at the beginning of the name ie 1variable instead variable1 would be fine. This isn't new to me because this has been pounded into me since the start of school to use descriptive names and avoid weird characters as well as using things like snake_case for code readability. IE if someone else reads my code I don't want to confuse them since this can cause issues.

Sources:
[1]“Document Object Model,” Wikipedia, Oct. 09, 2020. https://en.wikipedia.org/wiki/Document_Object_Model
‌[2]W3Schools, “HTML and XHTML,” W3schools.com, 2019. https://www.w3schools.com/html/html_xhtml.asp

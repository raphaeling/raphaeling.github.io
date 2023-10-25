## Documentation
#### Some things I learned while making this website

#####Next.js
- [Apparently](https://stackoverflow.com/questions/53132068/naming-best-practices-for-react-components-and-functions-including-filenames#comment93175826_53132210), stand-alone Next Component files are typically named in PascalCase, while files for Components used in routing are in hyphenated-lower-case
- Finding a way to pass props to an SVG file was a first-time experience and took longer than expected. Next's \<Image> component doesn't really allow modification to the src link's content, and I was pretty adamant on not using inline svg's for cleanliness and modularity's sake. Props wouldn't pass on the svg tag's attributes, but a combination of setting the color attribute to `currentColor` a div wrapper did the trick!
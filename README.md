# extract-classnames

Node command line tool where you can extract css from html

input 

```htm
<figure class="photo">
    <img class="photo__img" src="me.jpg">
    <figcaption class="photo__caption">
        <blockquote class="photo__quote">
        Look at me!
        </blockquote>
    </figcaption>
</figure>
```

output

```css
.photo {

}
.photo__img {

}
.photo__caption {

}
.photo__quote {

}
```

## Usage

```sh
npm install extract-classnames
npx excn extract --src ./test/index.html --dest ./test/index.css
```

global install

```sh
npm install extract-classnames -g
excn extract --src ./test/index.html --dest ./test/index.css
```

## API
```js
const excn = require('extract-classnames');
excn.extractByFile('file_path');
```
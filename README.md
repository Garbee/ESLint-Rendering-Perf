# eslint-plugin-rendering-performance

Check your JS for usage of APIs known to cause rendering performance issues.
Paul Irish put together [a collection](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) of things that cause rendering performance issues.
This is an attempt to take these and creating linting rules to alert you to their usage.

It should be noted, this does not mean they should never be used.
Look over where they are used, and try to find alternative solutions.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-rendering-performance`:

```
$ npm install eslint-plugin-rendering-performance --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rendering-performance` globally.

## Usage

Add `rendering-performance` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rendering-performance"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "rendering-performance/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






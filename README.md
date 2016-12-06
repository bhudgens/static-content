# Static Content
Does nothing but serve static content

## Why Does this exist
Because copying a boilerplate and deleting things was faster than finding the NGINX template for an NGINX build pack.  Also, I like having the 'node' ecosystem in my containers.

## How to use
Set one variable to the path of your static content

```bash
export STATIC_CONTENT_DIRECTORY="/var/data/assets"
autodeploy git@github.com:bhudgens/static-content.git
```

---
---
header_links = [
                {
                    html: "<a href=\"{{ '/' | prepend: site.baseurl }}\">Home</a>"
                    pathname: "{{ '/' | prepend: site.baseurl }}"
                }
                {
                    html: "<a href=\"{{ '/archive.html' | prepend: site.baseurl }}\">Archive</a>"
                    pathname: "{{ '/archive.html' | prepend: site.baseurl }}"
                }
               ]
$ ->
    for link in header_links
        do ->
            if link.pathname != window.location.pathname 
                    $('#page-header').append (link.html + ' ')

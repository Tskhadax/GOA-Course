#CodeWars
def domain_name(url):
    if "://" in url:
        url = url.split("://")[1]
    if url.startswith("www."):
        url = url[4:]
    return url.split(".")[0]
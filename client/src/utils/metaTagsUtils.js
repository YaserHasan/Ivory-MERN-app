const BASE_URL = 'https://ivory-computers.herokuapp.com';

function selectMetaByName(metaName) {
    return document.querySelector(`head meta[name="${metaName}"]`);
}

function selectMetaByProperty(property) {
    return document.querySelector(`head meta[property="${property}"]`);
}

function updateFacebookTags(data) {
    const { title, description, imageURL, URLPath } = data;
    selectMetaByProperty('og:title').content = title;
    selectMetaByProperty('og:description').content = description;
    selectMetaByProperty('og:image').content = imageURL;
    selectMetaByProperty('og:url').content = BASE_URL + URLPath;
}

function updateTwitterTags(data) {
    const { title, description, imageURL, URLPath } = data;
    selectMetaByName('twitter:title').content = title;
    selectMetaByName('twitter:description').content = description;
    selectMetaByName('twitter:image').content = imageURL;
    selectMetaByProperty('twitter:url').content = BASE_URL + URLPath;
}

function updateSocialsTitle(title) {
    selectMetaByProperty('og:title').content = title;
    selectMetaByName('twitter:title').content = title;
}

export function updateLinkPreviewTags(data) {
    updatePageTitle(data.title);
    selectMetaByName('description').content = data.description;
    updateFacebookTags(data);
    updateTwitterTags(data);
}

export function updatePageTitle(title) {
    document.title = title;
    updateSocialsTitle(title);
}
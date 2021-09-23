import { sanitizeHTML } from './safetyUtils';

export function formatPrice(price) {
    let formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    // to remove the .00 at the end
    formattedPrice = formattedPrice.split('.')[0];
    //                                              ILS symbol
    return sanitizeHTML(formattedPrice.toString() + '&#8362;');
}

 export function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return sanitizeHTML(formattedDate);
}
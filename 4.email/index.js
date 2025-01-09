/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const result = {};
    emails.forEach(email=>{
        let [local,domain] = email.split("@");
        local = local.replace(/\./g,'').split("+")[0];
        result[local+'@'+domain] = true;
    })
    return Object.keys(result).length;
};
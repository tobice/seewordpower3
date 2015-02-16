// Pass arguments into context (used for including partials)
// https://github.com/assemble/assemble/issues/228#issuecomment-57397951
module.exports = function (options) {
    return options.fn(options.hash);
};
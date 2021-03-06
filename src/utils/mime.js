const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/webp', 'image/png', 'image/gif'];

function getMimeTypeByFileName(filename) {
    const ext = filename.match(/\.([^.]+)$/)[1];

    switch (ext) {
        case 'jpg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'webp':
            return 'image/webp';
        case 'gif':
            return 'image/gif';
        default:
            throw new Error('Invalid file name');
    }
}

module.exports = {
    ALLOWED_MIME_TYPES,
    getMimeTypeByFileName,
};

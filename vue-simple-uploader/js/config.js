export const ACCEPT_CONFIG = {
    image: [],
    // image: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
    video: ['.mp4', '.rmvb', '.mkv', '.wmv', '.flv'],
    document: [],
    // document: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.tif', '.tiff'],
    getAll(){
        return [...this.image, ...this.video, ...this.document]
    },
};
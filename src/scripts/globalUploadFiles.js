class UploadFilesUtility {
    constructor() {
        if (UploadFilesUtility.instance) {
            return UploadFilesUtility.instance;
        }
        this.uploadFiles = [];
        UploadFilesUtility.instance = this;
    }

    addFile(file, newName) {

        if (newName) {
                file = new File([file], newName, {
                type: file.type,
                lastModified: file.lastModified,
            });

        }

        const existingFile = this.findFile(file)

        if (existingFile) {
            console.error('Existing file: ', existingFile)
            return
        }

        this.uploadFiles.push(file);
    }

    getFiles() {
        return this.uploadFiles;
    }

    removeFile(filename) {
        this.uploadFiles = this.uploadFiles.filter(existingFile => existingFile.name !== filename);
    }

    clearFiles() {
        this.uploadFiles.length = 0;
    }

    findFile(file) {
        return this.uploadFiles.find(function (existingFile) {
            return (
                existingFile.name === file.name &&
                existingFile.lastModified === file.lastModified &&
                existingFile.size === file.size &&
                existingFile.type === file.type
            )
        })
    }

    renameFile(oldName, newName) {
        this.uploadFiles = this.uploadFiles.map(file => {
            if (file.name === oldName) {
                return new File([file], newName, {
                    type: file.type,
                    lastModified: file.lastModified,
                    ...file,
                });
            }
            return file;
        });
    }
}

const uploadFilesInstance = new UploadFilesUtility();

window.uploadFilesInstance = uploadFilesInstance;


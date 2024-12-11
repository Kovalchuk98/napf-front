import { resizeCurrentAccordionHeight } from "./common_scripts";
import * as uploadFilesInstance from "./globalUploadFiles";
import * as tinyContentInstance from "../../src/scripts/globalTinyContent.js";
// import { showCompactDocuments } from "../../pages/mail_user/mail_user";

let moreOperationsButton = document.querySelectorAll('.more_operations_button');

let operationsListItems = document.querySelectorAll('.operations_list_item');

let editDocumentButtons = document.querySelectorAll('.edit_button');
let removeDocumentButtons = document.querySelectorAll('.remove_button');

let editCommentButtons = document.querySelectorAll('.comment_edit_button');
let removeCommentButtons = document.querySelectorAll('.comment_remove_button');

let uploadButtons = document.querySelectorAll('.upload_button');
let uploadInputs = document.querySelectorAll('#upload_input');

let uploadEditButtons = document.querySelectorAll('.upload_edit_button');
let uploadRemoveButtons = document.querySelectorAll('.upload_remove_button');

let uploadInputFiles = document.querySelectorAll('.upload_input_file');
let uploadInputNames = document.querySelectorAll('.upload_input_name');

let materialsLists = document.querySelectorAll('.materials_list');

let cancelButtons = document.querySelectorAll('.cancel_button');
let publicateButtons = document.querySelectorAll('.publicate_button');

let sidebarMenuItems = document.querySelectorAll('.sidebar_menu_item');

let editFileName = '';

sidebarMenuItems.forEach(sidebarMenuItem => {
    sidebarMenuItem.addEventListener('click', () => {
        sidebarMenuItems.forEach(sidebarMenuItem => {
            sidebarMenuItem.classList.remove('active_menu_item');
        })
        sidebarMenuItem.classList.add('active_menu_item');
    });
});

sidebarMenuItems.forEach(sidebarMenuItem => {
    sidebarMenuItem.addEventListener('mouseleave', () => {
        sidebarMenuItem.classList.remove('active_menu_item');
    });
});


function editDocument(button) {
    let selectItem = button.closest('.mail_materials_wrapper ');

    let uploadWrapper = selectItem.querySelector('.mail_upload_wrapper ');

    let uploadInputFile = selectItem.querySelector('.upload_input_file');

    let accordion = uploadWrapper.parentNode.parentNode.parentNode;

    let documentTitle = button.parentNode.parentNode.previousElementSibling.textContent;

    uploadWrapper.classList.add('mail_upload_edit');
    uploadInputFile.setAttribute('value', documentTitle.trim().replace(/   /g, ''));

    editFileName = documentTitle;

    uploadWrapper.querySelector('.upload_button').querySelector('span').textContent = 'Прикрепить документ';

    if (accordion.classList.contains('accordion_content')) {
        resizeCurrentAccordionHeight(accordion);
    }
}

function removeDocument(button) {
    let selectItem = button.closest('.materials_list_item');

    let filename = selectItem.querySelector('.document_info_title').textContent;

    window.uploadFilesInstance.removeFile(filename);
    
    selectItem.remove();
}

editDocumentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        editDocument(button);
    });
});

removeDocumentButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeDocument(button);
    });
});


// Comment Operations
editCommentButtons.forEach(editCommentButton => {
    let commentWrapper = editCommentButton.closest('.mail_user_wrapper');
    let commentContent = commentWrapper.querySelector('.mail_text').querySelector('p').textContent;
    let textarea = commentWrapper.querySelector('.mail_user_textarea');
    editCommentButton.addEventListener('click', () => {
        commentWrapper.classList.add('edit_wrapper');
        textarea.value = commentContent;
    })
})

removeCommentButtons.forEach(removeCommentButton => {
    removeCommentButton.addEventListener('click', () => {
    })
})


cancelButtons.forEach(cancelButton => {
    let mailWrapper = cancelButton.closest('.mail_user_wrapper');
    let uploadWrapper = mailWrapper.querySelector('.mail_upload_wrapper');

    cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        mailWrapper.classList.remove('edit_wrapper');
        resetUploadInput(uploadWrapper);
    });
});

publicateButtons.forEach(publicateButton => {

    let accordion = publicateButton.closest('.accordion');
    let accordionHeader = publicateButton.closest('.accordion_header');

    publicateButton.addEventListener('click', (event) => {
        event.preventDefault();

        let currentPublicateButton = event.currentTarget;
        let accordion = currentPublicateButton.closest('.accordion');
        let isAccordionChild = currentPublicateButton.parentNode.parentNode.classList.contains('accordion_content_wrapper');

        if (isAccordionChild && accordion) {
            let uploadWrapper = accordion.querySelector('.mail_upload_wrapper');
            accordion.querySelector('.accordion_header').classList.remove('active_accordion');
            resetUploadInput(uploadWrapper);
            accordion.querySelector('.accordion_content').style.maxHeight = null;

        } else {
            let mailWrapper = publicateButton.closest('.mail_user_wrapper') || publicateButton.closest('.mail_edit_block');

            let uploadWrapper = mailWrapper.querySelector('.mail_upload_wrapper');

            mailWrapper.classList.remove('edit_wrapper');
            resetUploadInput(uploadWrapper);
        }

        window.uploadFilesInstance.clearFiles();
    });
});

function formatFileSize(bytes) {
    if (bytes == 0) return '0 Bytes';
    let k = 1000,
        dm = 0,
        sizes = ['б', 'кб', 'мб', 'гб', 'тб'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getFileNameWithoutExt(filename) {
    return filename.split('.').slice(0, -1).join('.');
}

// UPLOAD DOCUMENTS
uploadButtons.forEach(uploadButton => {

    let parentClasses = ['accordion_content_wrapper', 'mail_edit_block'];

    //Кнопка Выбрать файл
    uploadButton.addEventListener('click', function (e) {

        let materialsList = e.currentTarget.closest('.mail_materials_wrapper').querySelector('.materials_list');

        let editableMaterial = materialsList.parentNode.parentNode;


        let isCompactDocument = true;

        if (parentClasses.some(className => editableMaterial.classList.contains(className))) {
            isCompactDocument = false;
        }

        let uploadInput = uploadButton.previousElementSibling;

        let uploadWrapper = uploadButton.closest('.mail_upload_wrapper');

        let newFileName = uploadWrapper.querySelector('.upload_input_name').value;

        // Если файл выбран
        if (!uploadWrapper.className.includes('mail_upload_edit')) {
            uploadInput.click();
        } else {
            // Загружаемый файл
            let file = uploadInput.files[0];
 
            if (editFileName) {

                let editExt = editFileName.split('.').pop();

                if (!newFileName) {
                    editFileName = '';
                    resetUploadInput(uploadWrapper);
                    return
                }

                let fileName = newFileName ? `${newFileName}.${editExt}` : file.name;
                
                let materialItems = materialsList.querySelectorAll('.materials_list_item');

                let currentMaterialItem = [...materialItems].find(item => item.querySelector('.document_info_title').textContent === editFileName);
                if (currentMaterialItem) {
                    currentMaterialItem.querySelector('.document_info_title').textContent = fileName;
                }

                window.uploadFilesInstance.renameFile(editFileName, fileName);

                uploadWrapper.querySelector('.upload_input_name').value = '';
                editFileName = '';

                resetUploadInput(uploadWrapper);
                return
            }

            if (file) {

                let file_ext = file?.name.split('.').pop();
                let fullName = newFileName ? `${newFileName}.${file_ext}` : file.name;

                window.uploadFilesInstance.addFile(file, fullName);

                let materialsListItem = document.createElement('div');

                materialsListItem.className = 'documents_list_item materials_list_item';

                if (!isCompactDocument) {
                    materialsListItem.classList.add('document_nocompact');
                }

                // Создание элемента списка документов
                let documentIcon = document.createElement('img');
                documentIcon.className = 'document_icon';

                documentIcon.src = `../../icons/${file_ext}.svg`;
                documentIcon.alt = 'icon';

                let documentInfoWrapper = document.createElement('div');
                documentInfoWrapper.className = 'document_info_wrapper material_info_wrapper';

                let documentInfoTitle = document.createElement('p');
                documentInfoTitle.className = 'document_info_title';

                documentInfoTitle.textContent = fullName;

                let documentOperationsWrapper = document.createElement('div');
                documentOperationsWrapper.className = 'operations_wrapper';

                let documentMoreButton = document.createElement('button');
                documentMoreButton.className = 'more_operations_button';

                let documentMoreButtonIcon = document.createElement('img');
                documentMoreButtonIcon.src = '../../icons/vdots.svg';
                documentMoreButtonIcon.alt = 'icon';

                documentMoreButton.appendChild(documentMoreButtonIcon);

                documentOperationsWrapper.appendChild(documentMoreButton);


                let documentOperationsList = document.createElement('div');
                documentOperationsList.className = 'operations_list';

                let documentEditButton = document.createElement('button');
                documentEditButton.className = 'operations_list_item edit_button';

                let documentEditButtonIcon = document.createElement('img');
                documentEditButtonIcon.src = '../../icons/write.svg';
                documentEditButtonIcon.alt = 'icon';

                documentEditButton.appendChild(documentEditButtonIcon);

                let documentRemoveButton = document.createElement('button');
                documentRemoveButton.className = 'operations_list_item remove_button';

                let documentRemoveButtonIcon = document.createElement('img');
                documentRemoveButtonIcon.src = '../../icons/trash.svg';
                documentRemoveButtonIcon.alt = 'icon';

                documentRemoveButton.appendChild(documentRemoveButtonIcon);


                documentOperationsList.appendChild(documentEditButton);
                documentOperationsList.appendChild(documentRemoveButton);

                documentOperationsWrapper.appendChild(documentOperationsList);


                documentInfoWrapper.appendChild(documentInfoTitle);

                materialsListItem.appendChild(documentIcon);


                // Добавить ссылку на скачивание
                if (isCompactDocument) {

                    let downloadLink = document.createElement('a');

                    let downloadLinkTitle = document.createElement('p');
                    downloadLinkTitle.textContent = 'Скачать';

                    downloadLink.href = URL.createObjectURL(file);
                    downloadLink.className = 'document_link block_link_filled';

                    let downloadLinkIcon = document.createElement('img');
                    downloadLinkIcon.className = 'document_link_icon';
                    downloadLinkIcon.setAttribute('src', '../../icons/download.svg');

                    let extText = document.createElement('span');
                    extText.textContent = `(.${file.name.split('.').slice(-1)} ${formatFileSize(file.size)})`;

                    downloadLinkTitle.appendChild(extText);
                    downloadLink.appendChild(downloadLinkIcon);
                    downloadLink.appendChild(downloadLinkTitle);

                    documentInfoWrapper.appendChild(downloadLink)
                }

                materialsListItem.appendChild(documentInfoWrapper);

                documentInfoWrapper.appendChild(documentOperationsWrapper);

                materialsList.appendChild(materialsListItem);

                // Подписатьcя на события кнопок (поправить выбор документа)
                documentEditButton.addEventListener('click', (e) => {
                    editDocument(documentEditButton);
                })

                documentRemoveButton.addEventListener('click', (e) => {
                    removeDocument(documentEditButton);
                })

                resetUploadInput(uploadWrapper);

                uploadWrapper.querySelector('#upload_input').value = '';
            }

            uploadWrapper.querySelector('.upload_input_name').value = '';
        }

    });
});

uploadEditButtons.forEach(uploadEditButton => {
    uploadEditButton.addEventListener('click', function () {
        // uploadInput.click();
        // uploadEditButton
    });
});

function resetUploadInput(uploadWrapper) {
    let uploadInput = uploadWrapper.querySelector('#upload_input');
    let uploadButton = uploadWrapper.querySelector('.upload_button');

    uploadInput.files = null;
    uploadWrapper.classList.remove('mail_upload_edit');
    uploadButton.querySelector('span').textContent = 'Выбрать файл';
}

uploadRemoveButtons.forEach(uploadRemoveButton => {
    uploadRemoveButton.addEventListener('click', function () {
        resetUploadInput(uploadRemoveButton.closest('.mail_upload_wrapper'));
    });
});

uploadInputs.forEach(uploadInput => {
    let uploadButton = uploadInput.nextElementSibling;
    let uploadWrapper = uploadInput.closest('.mail_upload_wrapper');
    let uploadInputFile = uploadWrapper.querySelector('.upload_input_file');

    let accordion = uploadInput.closest('.mail_upload_wrapper').parentNode.parentNode.parentNode;
    uploadInput.addEventListener('change', function (event) {
        let file = event.target.files[0];
        if (file) {
            uploadButton.querySelector('span').textContent = 'Прикрепить документ';
            uploadWrapper.classList.add('mail_upload_edit');
            uploadInputFile.setAttribute('value', file.name);

            if (accordion.classList.contains('accordion_content')) {
                resizeCurrentAccordionHeight(accordion);
            }
        }
    });
});

// MATERIALS OPERATIONS MENU
moreOperationsButton.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active_operations');
    })
});

operationsListItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.parentNode.classList.remove('active_operations');
    });
});

document.addEventListener('click', (event) => {
    const operationsWrappers = document.querySelectorAll('.active_operations');

    let isClickInsideOperationsWrapper = false;

    if (event.target.tagName === 'IMG' && event.target.closest('.more_operations_button')) {
        const button = event.target.closest('button');
        button.parentNode.classList.add('active_operations');
    }

    operationsWrappers.forEach(function (wrapper) {
        if (wrapper.contains(event.target)) {
            isClickInsideOperationsWrapper = true;
        }
    });

    if (!isClickInsideOperationsWrapper) {
        operationsWrappers.forEach(function (wrapper) {
            wrapper.classList.remove('active_operations');
        });
    }
});



function checkScreenWidth() {

    let screenWidth = window.innerWidth;

    if (screenWidth <= 1539) {
        uploadInputNames.forEach(uploadInput => {
            uploadInput.setAttribute('placeholder', 'Отображаемое название');
        });
    }
    else {
        uploadInputNames.forEach(uploadInput => {
            uploadInput.setAttribute('placeholder', 'Здесь вы можете, при необходимости, указать название документа, которое будет отображено в рассылке');
        })
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

let showDialog, closeDialog;

const evtShowDialog = (event) => {

    let curElement = event.target;

    let modalDialog = curElement.parentElement.querySelector('.lqd-mdldialog-outer');
    modalDialog.classList.remove('is-hidden');
    modalDialog.classList.add('is-visible');

};

const evtHideDialog = (event) => {

    let curElement = event.target;

    let modalDialog = curElement.closest('.lqd-mdldialog-outer');

    modalDialog.classList.remove('is-visible');
    modalDialog.classList.add('is-hidden');

};

export const registerDialog = () => {

    showDialog = document.querySelectorAll('.show-dialog');
    closeDialog = document.querySelectorAll('.lqd-dlgheader-closer');

    if (showDialog) {

        showDialog.forEach(item => {
            item.addEventListener('click', evtShowDialog)
        });

    }

    if (closeDialog) {

        closeDialog.forEach(item => {
            item.addEventListener('click', evtHideDialog)
        })
    }

}
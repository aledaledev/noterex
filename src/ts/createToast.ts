import { Toast } from "../main"

export const customToast:Toast[] = [
    {
        bgColor:'info',
        content:'created'
    },
    {
        bgColor:'success',
        content:'edited'
    },
    {
        bgColor:'danger',
        content:'deleted'
    }
]

export function createToast({bgColor,content}:Toast){
    const toast = document.createElement('div')
    const toastContent = document.createElement('div')
    const toastBody = document.createElement('div')
    const buttonClose = document.createElement('button')

    buttonClose.classList.add('btn-close','btn-close-white','me-2','m-auto')
    buttonClose.addEventListener('click', (e) => {
        toast.classList.replace('visible','hidden')
        setTimeout(() => {
            document.body.removeChild(toast)
        },500)        
    })

    toastBody.classList.add('toast-body')
    toastBody.textContent = `Successfully ${content} task`

    toastContent.classList.add('d-flex')
    toastContent.appendChild(toastBody)
    toastContent.appendChild(buttonClose)

    toast.classList.add('custom-toast','hidden','toast','d-block', `text-bg-${bgColor}` ,'position-fixed','border-0','top-0','end-0','me-3','mt-3')
    toast.appendChild(toastContent)

    document.body.appendChild(toast)

    setTimeout(()=> {
        toast.classList.replace('hidden','visible')
    },0)
    
    setTimeout(()=> {
        if(toast.classList.contains('visible')){
            toast.classList.replace('visible','hidden')
            setTimeout(() => {
                document.body.removeChild(toast)
            },500)   
        }
    },3000)
}

export default createToast
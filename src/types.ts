export type Task = {
    id: string;
    title: string;
    description: string;
    //date: Date
}

export type Toast = {
    bgColor: 'info' | 'success' | 'danger',
    content: 'created' | 'edited' | 'deleted'
}

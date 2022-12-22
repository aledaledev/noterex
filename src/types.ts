export type Task = {
    id: string;
    title: string;
    description: string;
    time:string;
    dayMonthYear:string;
}

export type Toast = {
    bgColor: 'info' | 'success' | 'danger',
    content: 'created' | 'edited' | 'deleted'
}

export interface StorageProps {
    tasks:Task[],
    dates:string[]
}
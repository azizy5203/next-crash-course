import type { NextApiRequest, NextApiResponse } from 'next'

type Task = {
    id: number
    title: string
    completed: boolean
}

// Example data
const tasks: Task[] = [
    { id: 1, title: 'Learn Next.js', completed: false },
    { id: 2, title: 'Build an API', completed: false }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json(tasks)
    } else if (req.method === 'POST') {
        // Handle POST request
        const newTask = {
            id: tasks.length + 1,
            title: req.body.title,
            completed: false
        }
        tasks.push(newTask)
        res.status(201).json(newTask)
    } else {
        // Handle other HTTP methods
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
} 
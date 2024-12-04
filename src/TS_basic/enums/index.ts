enum Status {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}

type answer = {
    question: string,
    answer: string,
    tags: ['popular', 'new'],
    likes: number,
    status: Status
}

async function getFaqs(req: { topicId: number, status?: Status }): Promise<answer[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: Promise<answer[]> = await res.json();
    return data;
}
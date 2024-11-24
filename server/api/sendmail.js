export default defineEventHandler({
    handler: async (event) => {
        const body = await readBody(event)
        console.log(body)
        return { success: true }
    }
})
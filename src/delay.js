export default async function delay() {
    await new Promise(resolve => setTimeout(resolve, 4000));
}

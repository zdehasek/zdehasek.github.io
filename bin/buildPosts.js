const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const remark = require('remark');
const html = require('remark-html');

(async () => {

    const postsDirectory = path.join(process.cwd(), 'posts');

    function getAllPostIds () {

        const fileNames = fs.readdirSync(postsDirectory);

        // console.log(fileNames);

        // Returns an array that looks like this:
        // [
        //   {
        //     params: {
        //       id: 'ssg-ssr'
        //     }
        //   },
        //   {
        //     params: {
        //       id: 'pre-rendering'
        //     }
        //   }
        // ]
        return fileNames.map((fileName) => ({
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }));
    }

    async function getPostData (id) {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and contentHtml
        return {
            id,
            contentHtml,
            ...matterResult.data
        };
    }

    // console.log(getAllPostIds());

    // const post1 = new Promise(getPostData('post1'));

    const post1 = await getPostData('post1');

    console.log(post1);

    function getSortedPostsData () {
        // Get file names under /posts
        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = fileNames.map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id,
                ...matterResult.data
            };
        });
        // Sort posts by date
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            return -1;

        });
    }

    console.log('gogog', getSortedPostsData());

})();

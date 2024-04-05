export function calculateReadingTime(content: string | Record<string, any>[] | undefined): number {
    if (!content) {
      return 0;
    }
  
    let textContent = '';
  
    if (Array.isArray(content)) {
      // If the content is an array, extract and concatenate text from blocks
      textContent = content
        .map((block) => {
          if (block._type === 'block' && block.children) {
            return block.children.map((child: Record<string, any>) => child.text).join(' ');
          }
          return '';
        })
        .join(' ');
    } else if (typeof content === 'string') {
      textContent = content;
    }
  
    const wordsPerMinute = 200;
    const words = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  }
  
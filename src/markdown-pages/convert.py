import os
from glob import iglob

for file in iglob('./**/*.md', recursive=True):
    print(file.replace('\\','/')[1:-3])
    path = False
    pastFirstLine = False
    with open(file, "r") as f:
        try:
            lines = f.readlines()
        except:
            print("Error with " + file)
            continue
    with open(file, "w") as f:
        for line in lines:
            #make sure the path does not already exist
            if line.startswith("path:"):
                path = True

            #insert path at the end of the frontmatter
            if line.startswith("---"):
                if pastFirstLine:
                    if not path:
                        f.write("path: " + file.replace('\\','/')[1:-3] + '\n')
                else:
                    pastFirstLine = True

            #write lines
            if not (line.startswith("layout:")):
                f.write(line)

import React from "react";
import { Container } from "react-grid-system";
// import Clap from 'react-clap-button';

// Components
import GoBack from "../../../components/common/GoBack";
import Markdown from "../../../components/common/MarkdownStyling";
import Helmet from "../../../components/common/Helmet";

// const onCountChange = ({ count, countTotal }) => {
//     countTotal = count
// };

   

const blog1 = `
How boring is it when every time you start a project, you have to do all the boring stuff all over again — Create a directory, Add Git to it, Add a virtual environment and blah blah.

Here is a solution to all that.

I created a simple script which automates all the things that needed to be done when you start a new project.

***


### Python Script

First, let me explain you about the python script. Here I am using 3 import statements to import all the required libraries to run the program.

>    os<br>
> sys<br>
> [PyGithub](https://pygithub.readthedocs.io/en/latest/index.html)

These three libraries are all that we need. Coming to the code, I have created two functions in the program —

1. **create()** — which creates the directory in your machine by the name of your project.
2. **create_repo_on_github()** — which creates a new repository on your github account by the name of your project.

***

### Code Explanation

First, we define two variables, username and password where we put our github username and github password. Then we define a new variable called projectName which gets it’s value from the system line argument. Finally, we make a variable called path where we put the path where we want our project to be created.

Then we create the two functions we talked about earlier. Here, I am using the libraries os and PyGithub to create the project in the local machine and on the github account.

\`\`\`python
import os
import sys
from github import Github

username = "{{YOUR_GITHUB_USERNAME}}" #Insert your github username here 
password = "{{YOUR_GITHUB_PASSWORD}}" #Insert your github password here 
 
projectName = sys.argv[1] #Takes In-Line Argument

path = "{{YOUR_DIRECTORY_PATH}}" #Insert your path here 


def create():
    try:
        os.makedirs(path + str(projectName)) # Create target Directory
        print("Directory " , projectName ,  " Created ") 
    except FileExistsError:
        print("Directory " , projectName ,  " already exists")        
    create_repo_on_github()

def create_repo_on_github():
    user = Github(username, password).get_user() # Get user Authentication
    repo = user.create_repo(projectName) # Create a new Repo
    print("Succesfully created repository {}".format(projectName))  

if __name__ == '__main__':
    create()
\`\`\`


### Shell Script

Second, we create the shell script. Here, we create a function that executes all the commands that automates the process. The function does the following —
1. Installs the required libraries globally if it does not exist already.

2. Runs the Python Script that we created.

3. Changes the directory to the folder created by the Python Script.

4. Installs ***virtualenv*** by pip. Creates a ***venv*** and activates it.

5. Copy the ***common-requirements.txt*** file to the folder created and installs the common requirements one uses for his/her project and installs it.

6. Initializes git inside the folder and adds the origin.

7. Creates a ***readme.md*** file and ***.gitignore*** file which consists of venv so that the whole venv folder is not uploaded on Github.

8. Commit the changes and push them.

9. Finally, opens the directory in VSCode

\`\`\`
#!/bin/bash

function create() {
    pip3 install -r ./global-requirements.txt # Install the Requirements globally
    python3 ./app.py $1 # Run the Python Program
    cd {{YOUR_DIRECTORY_PATH}}/$1 # Change Directory to the Directory Created 
    python3 -m pip install virtualenv # Install Virtualvenv
    python3 -m virtualenv venv # Create a new Virtualenv
    source venv/bin/activate # Activate the venv
    cp {{THIS_FOLDER_PATH}}/common-requirements.txt ./ # Copy the requiremenmts 
    pip3 install -r ./common-requirements.txt # Install the Requirements you 
    git init # Initilize Git
    git remote add origin https://github.com/{{YOUR_GITHUB_USERNAME}}/$1.git # Add Git Origin
    echo "# demo" >> README.md # Create Readme
    echo "venv" >> .gitignore # Add venv to gitignore
    git add . # Add all the files to Git
    git commit -m "Initial commit" # Commit the changes
    git push -u origin master # Push the changes
    code . # Open VS Code
}
\`\`\`

### Installation

Follow the steps to install.

1. Open terminal and run the command \`git clone https://github.com/whoissahil/ProjectSetup-PythonAutomation.git\`
2. Change the directory to the project’s directory \`cd ProjectSetup-PythonAutomation/\`
3. Open the file \`app.py\` and add your Github Username, Github Password and the Path where you want your project to be.
4. Open the file \`.my-commands.sh\` and add your Directory Path and the path of this Project.
5. Run the command \`chmod +x .my-commands.sh\`
6. Run the command \`source ./.my-commands.sh\`
7. Run the command \`create YourProjctName\`

***

#### Check out my project on [Github](https://github.com/whoissahil/ProjectSetup-PythonAutomation)
#### Watch the [YouTube](https://www.youtube.com/watch?v=BqS7pPbB_os) Video for installation and explanation.

`


function Blog1_ProjectSetupPythonAutomation() {
    return (
        <div>
        <Helmet title="writes on Project Setup — Python Automation" />
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Project Setup — Python Automation</h1>
                                    <p>
                                        by <span className="author">Sahil Sharma</span> on <span class="date">Jan 12, 2020</span>.
                                    </p>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/blog/1-1.jpg" alt="Sahil Post" />
                                    <figcaption>Photo by <a href="https://unsplash.com/@yancymin" rel="noopener noreferrer" target="_blank">Yancy Min</a> on <a href="https://unsplash.com/@yancymin" rel="noopener noreferrer" target="_blank">Unspalsh</a></figcaption>
                                </div>
                                <div className="post-content">
                                    <Markdown
                                        children={blog1}
                                    />
                                </div>
                                <div class="post-tags">
                                    <span>Tags:</span>
                                    <ul>
                                        <li class="redTag">
                                            Shell
                                        </li>
                                        <li class="blueTag">
                                            Python
                                        </li>
                                        <li class="greenTag">
                                            Automation
                                            {/* <a href="">Corporate</a> */}
                                        </li>
                                    </ul>
                                    {/* <span>
                                        <Clap
                                        count={0}
                                        countTotal={0}
                                        iconComponent={props => <FaCheck {...props} size={15} /> }
                                        isClicked={false}
                                        maxCount={50}
                                        onCountChange={function onCountChange(){}}
                                        theme={{
                                            secondaryColor: '#5f27ae'
                                        }}
                                        />
                                    </span>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </div>
    );
}

export default Blog1_ProjectSetupPythonAutomation;

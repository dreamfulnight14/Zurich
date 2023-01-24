### How to run the project
    Cli:
        npm install
        npm run start [path of a data file]
    Ex: npm run start ./data/example1.com
    Note: Path is optional.

### How to run the test
    Cli: npm run test [path of a input file] [path of a output file]
    Ex: npm run test ./data/mockInput.txt ./data/mockOutput.txt
    Note: Paths are optional. 
    Input File: This file should contain one word per line.
    Output File: In this file, each anagram group should be separated by a new line, with the words contained in each group separated by a comma.

### ASSUMPTIONS 
    Assume that the words in the input .txt file are ordered by length.
    Assume that you are not expected to modify the input file itself, only output the anagrams to the console.
    Assume that every words in files only contain letters.
    Assume that EOL is '\n'.
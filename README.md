This repository demonstrates a bug in MongoDB's aggregation framework.  The issue arises when combining a `$lookup` stage with a `$match` stage that uses a regular expression. The aggregation pipeline intends to filter documents based on a regex and then perform a join using `$lookup`, but the resulting dataset is incorrect. The `bug.js` file contains the problematic code, and `bugSolution.js` offers a potential solution or workaround.
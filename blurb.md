# `from past import print_statement`

Updating a python compiler to python 3 grammar while maintaining backwards compatibilty with python2. Why? 3 Ugly truths:

- forking master and maintaining two versions is not feasible with so few developers
- our main users have a lot of code out there that's on python2
- we can't fully implement python3 so we chose to upgrade the grammar and break as few things as possible

## Topics to cover (order could change):

- a brief run through of a python compiler
  - tokenizer
  - parser (parse tables)
  - cst -> ast
  - symbol table
  - compile to js

- changes to the grammar we did to support both python2 and 3

- oddities we've run into
  - fast path function call if arguments match
  - what is actually allowed as a identifier (a lot)
  - async keyword grammar instability in python

- shout out
  - trinket.io
  - anvil.works
  - interactivepython.org (Runestone Interactive)
  - mooc's rice university
  - dr. chuck python for everybody
export const solutions = [
  {
    id: 'q1',
    title: 'Question 1',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Let A, B, and C be sets. Show that $\\overline{A \\cup (B \\cap C)} = (\\overline{C} \\cup \\overline{B}) \\cap \\overline{A}$.',
    answer: `
**Step 1:** Start with the Left Hand Side (LHS).
$$ \\text{LHS} = \\overline{A \\cup (B \\cap C)} $$

**Step 2:** Apply De Morgan's Law: $\\overline{X \\cup Y} = \\overline{X} \\cap \\overline{Y}$.
Let $X = A$ and $Y = (B \\cap C)$.
$$ \\text{LHS} = \\overline{A} \\cap \\overline{(B \\cap C)} $$

**Step 3:** Apply De Morgan's Law again on the second term: $\\overline{X \\cap Y} = \\overline{X} \\cup \\overline{Y}$.
$$ \\overline{(B \\cap C)} = \\overline{B} \\cup \\overline{C} $$
Substitute this back into the LHS equation:
$$ \\text{LHS} = \\overline{A} \\cap (\\overline{B} \\cup \\overline{C}) $$

**Step 4:** Use the Commutative Law of Union: $X \\cup Y = Y \\cup X$.
$$ \\overline{B} \\cup \\overline{C} = \\overline{C} \\cup \\overline{B} $$
$$ \\text{LHS} = \\overline{A} \\cap (\\overline{C} \\cup \\overline{B}) $$

**Step 5:** Use the Commutative Law of Intersection: $X \\cap Y = Y \\cap X$.
$$ \\text{LHS} = (\\overline{C} \\cup \\overline{B}) \\cap \\overline{A} $$

**Conclusion:**
$$ \\text{LHS} = \\text{RHS} $$
Hence, proved.
`
  },
  {
    id: 'q2',
    title: 'Question 2',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Determine whether the POSET ({1, 3, 6, 9, 12}, |) is a lattice or not.',
    answer: `
A POSET is a lattice if every pair of elements has a Least Upper Bound (LUB / Supremum) and a Greatest Lower Bound (GLB / Infimum) within the set.

**Step 1:** Consider the pair of elements $\\{6, 9\\}$.

**Step 2:** Find the upper bounds of $\\{6, 9\\}$.
Upper bounds must be multiples of both 6 and 9. The least common multiple is 18.
Any upper bound in the given set $\\{1, 3, 6, 9, 12\\}$ must be a multiple of 18.

**Step 3:** Check for existence in the set.
However, there are no multiples of 18 in the set. The element 12 is a multiple of 6, but not 9.
Therefore, the pair $\\{6, 9\\}$ has **no upper bound** in the set, and consequently, no Least Upper Bound (LUB).

**Conclusion:**
Since there exists a pair without a LUB, the given POSET is **not a lattice**.
`
  },
  {
    id: 'q3',
    title: 'Question 3',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Write the inverse, converse, and contrapositive of the following conditional statement: "If she practices every day and eats healthy food, then she will perform well in the competition."',
    answer: `
Let $P$: "She practices every day"
Let $Q$: "She eats healthy food"
Let $R$: "She will perform well in the competition"

The given conditional statement is: $(P \\land Q) \\rightarrow R$

**1. Inverse:** $\\neg(P \\land Q) \\rightarrow \\neg R$
*Statement:* If she does not practice every day or does not eat healthy food, then she will not perform well in the competition.

**2. Converse:** $R \\rightarrow (P \\land Q)$
*Statement:* If she performs well in the competition, then she practices every day and eats healthy food.

**3. Contrapositive:** $\\neg R \\rightarrow \\neg(P \\land Q)$
*Statement:* If she does not perform well in the competition, then she does not practice every day or does not eat healthy food.
`
  },
  {
    id: 'q4',
    title: 'Question 4',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Prove that if n is an integer and 3n + 2 is even, then n is even using a proof by contraposition.',
    answer: `
**Step 1:** State the contrapositive of the given statement.
Original statement: If $3n + 2$ is even, then $n$ is even.
Contrapositive: If $n$ is odd, then $3n + 2$ is odd.

**Step 2:** Assume the hypothesis of the contrapositive is true.
Assume $n$ is an odd integer.
By definition of an odd integer, $n = 2k + 1$ for some integer $k$.

**Step 3:** Substitute $n$ into the expression $3n + 2$.
$$ 3n + 2 = 3(2k + 1) + 2 $$
$$ = 6k + 3 + 2 $$
$$ = 6k + 5 $$

**Step 4:** Express the result in the form of an odd integer ($2m + 1$).
$$ 6k + 5 = 6k + 4 + 1 $$
$$ = 2(3k + 2) + 1 $$
Let $m = 3k + 2$. Since $k$ is an integer, $m$ is also an integer.
$$ 3n + 2 = 2m + 1 $$
This is the definition of an odd integer.

**Conclusion:**
Since the contrapositive is true, the original statement "If $3n + 2$ is even, then $n$ is even" is also logically true.
`
  },
  {
    id: 'q5',
    title: 'Question 5',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Use mathematical induction to prove the inequality $n < 2^n$ for all positive integers n.',
    answer: `
Let $P(n)$ be the proposition that $n < 2^n$.

**Step 1: Base Case**
For $n = 1$:
LHS = $1$
RHS = $2^1 = 2$
Since $1 < 2$, $P(1)$ is true.

**Step 2: Inductive Hypothesis**
Assume that $P(k)$ is true for some arbitrary positive integer $k$.
That is, $k < 2^k$.

**Step 3: Inductive Step**
We need to prove that $P(k+1)$ is true, i.e., $k + 1 < 2^{k+1}$.
From the inductive hypothesis, we have:
$$ k < 2^k $$
Adding 1 to both sides:
$$ k + 1 < 2^k + 1 $$
Since $k \\ge 1$, we know that $1 \\le 2^{k-1} < 2^k$. Therefore, $1 < 2^k$.
Substituting this inequality:
$$ k + 1 < 2^k + 2^k $$
$$ k + 1 < 2 \\cdot 2^k $$
$$ k + 1 < 2^{k+1} $$
This shows that $P(k+1)$ is true whenever $P(k)$ is true.

**Conclusion:**
By the principle of mathematical induction, $n < 2^n$ is true for all positive integers $n$.
`
  },
  {
    id: 'q6',
    title: 'Question 6',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Find the unique solution of the following recurrence relation $a_{n+1} - 3a_n = 0, n \\ge 0, a_0 = 5$.',
    answer: `
**Step 1:** Rewrite the recurrence relation.
$$ a_{n+1} = 3a_n $$
This is a first-order linear homogeneous recurrence relation with constant coefficients. It represents a geometric progression with a common ratio of $3$.

**Step 2:** Write the general solution.
The general solution for $a_n = r \\cdot a_{n-1}$ is $a_n = C \\cdot r^n$.
Here, $r = 3$, so:
$$ a_n = C \\cdot 3^n $$

**Step 3:** Use the initial condition to find the constant $C$.
Given $a_0 = 5$:
$$ a_0 = C \\cdot 3^0 $$
$$ 5 = C \\cdot 1 \\implies C = 5 $$

**Step 4:** Write the unique solution.
Substitute $C = 5$ back into the general solution:
$$ a_n = 5 \\cdot 3^n $$
`
  },
  {
    id: 'q7',
    title: 'Question 7',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Show that the cube roots of unity form a cyclic group.',
    answer: `
**Step 1:** Identify the elements and the operation.
The cube roots of unity are the solutions to $x^3 = 1$.
They are $1, \\omega, \\omega^2$, where $\\omega = e^{i2\\pi/3} = \\frac{-1 + i\\sqrt{3}}{2}$.
Let the set be $G = \\{1, \\omega, \\omega^2\\}$. The binary operation is multiplication.

**Step 2:** Check the group properties.
1. **Closure:** The product of any two cube roots of unity is also a cube root of unity (e.g., $\\omega \\cdot \\omega^2 = \\omega^3 = 1 \\in G$).
2. **Associativity:** Multiplication of complex numbers is associative.
3. **Identity:** $1 \\in G$ is the multiplicative identity.
4. **Inverse:** $1^{-1} = 1$, $\\omega^{-1} = \\omega^2$, and $(\\omega^2)^{-1} = \\omega$. All inverses exist in $G$.
Thus, $(G, \\cdot)$ is a group.

**Step 3:** Show that the group is cyclic.
A group is cyclic if there exists an element $g \\in G$ (called a generator) such that every element in $G$ can be written as $g^n$ for some integer $n$.
Let's test $\\omega$ as a generator:
*   $\\omega^1 = \\omega$
*   $\\omega^2 = \\omega^2$
*   $\\omega^3 = 1$
Since $\\langle \\omega \\rangle = \\{\\omega, \\omega^2, 1\\} = G$, $\\omega$ is a generator.
(Note: $\\omega^2$ is also a generator).

**Conclusion:**
Since the group can be generated by a single element, the cube roots of unity form a cyclic group.
`
  },
  {
    id: 'q8',
    title: 'Question 8',
    part: 'A',
    module: 'All',
    marks: 3,
    question: 'Prove that in a group (G,*), $(a * b)^{-1} = b^{-1} * a^{-1}$ for all $a, b \\in G$.',
    answer: `
**Step 1:** Understand the definition of an inverse.
For an element $x \\in G$, its inverse $y$ must satisfy:
$$ x * y = e \\quad \\text{and} \\quad y * x = e $$
where $e$ is the identity element of $G$.
Let $x = (a * b)$ and $y = (b^{-1} * a^{-1})$. We need to prove that $x * y = e$ and $y * x = e$.

**Step 2:** Prove $(a * b) * (b^{-1} * a^{-1}) = e$.
$$ (a * b) * (b^{-1} * a^{-1}) $$
$$ = a * (b * b^{-1}) * a^{-1} \\quad \\text{(by Associativity)} $$
$$ = a * e * a^{-1} \\quad \\text{(since } b * b^{-1} = e \\text{)} $$
$$ = a * a^{-1} \\quad \\text{(since } a * e = a \\text{)} $$
$$ = e \\quad \\text{(since } a * a^{-1} = e \\text{)} $$

**Step 3:** Prove $(b^{-1} * a^{-1}) * (a * b) = e$.
$$ (b^{-1} * a^{-1}) * (a * b) $$
$$ = b^{-1} * (a^{-1} * a) * b \\quad \\text{(by Associativity)} $$
$$ = b^{-1} * e * b \\quad \\text{(since } a^{-1} * a = e \\text{)} $$
$$ = b^{-1} * b \\quad \\text{(since } e * b = b \\text{)} $$
$$ = e \\quad \\text{(since } b^{-1} * b = e \\text{)} $$

**Conclusion:**
Since both left and right multiplication yield the identity element $e$, $(b^{-1} * a^{-1})$ is indeed the inverse of $(a * b)$.
$$ (a * b)^{-1} = b^{-1} * a^{-1} $$
`
  },
  {
    id: 'q9',
    title: 'Question 9',
    part: 'B',
    module: '1',
    marks: 9,
    question: 'Let U = { 1, 2, 3, 4 } and A = P( U ) and R be the subset relation on A ($\\subseteq$). Draw Hasse diagram and find out the minimal, maximal, greatest and lowest element of A.',
    answer: `
**Step 1:** Understand the set and relation.
$U = \\{1, 2, 3, 4\\}$.
$A = P(U)$ is the power set of $U$, which contains $2^4 = 16$ subsets.
The relation $R$ is $\\subseteq$ (subset). This forms a boolean lattice (a 4-dimensional hypercube).

**Step 2:** Identify the elements.
*   **Level 0 (Size 0):** $\\emptyset$
*   **Level 1 (Size 1):** $\\{1\\}, \\{2\\}, \\{3\\}, \\{4\\}$
*   **Level 2 (Size 2):** $\\{1,2\\}, \\{1,3\\}, \\{1,4\\}, \\{2,3\\}, \\{2,4\\}, \\{3,4\\}$
*   **Level 3 (Size 3):** $\\{1,2,3\\}, \\{1,2,4\\}, \\{1,3,4\\}, \\{2,3,4\\}$
*   **Level 4 (Size 4):** $\\{1,2,3,4\\}$

**Step 3:** Draw the Hasse Diagram.
*(The Hasse diagram is rendered below)*
<hassediagram />

**Step 4:** Find the required elements.
*   **Minimal element(s):** An element with no elements below it. Here, it is the empty set. $\\rightarrow \\mathbf{\\emptyset}$
*   **Maximal element(s):** An element with no elements above it. Here, it is the universal set. $\\rightarrow \\mathbf{\\{1, 2, 3, 4\\}}$
*   **Greatest element:** An element that is greater than or equal to all other elements. $\\rightarrow \\mathbf{\\{1, 2, 3, 4\\}}$
*   **Lowest (Least) element:** An element that is less than or equal to all other elements. $\\rightarrow \\mathbf{\\emptyset}$
`
  },
  {
    id: 'q10a',
    title: 'Question 10(a)',
    part: 'B',
    module: '1',
    marks: 4,
    question: 'Consider the functions given by $f(x) = 3x + 4$ and $g(x) = x^2$. Find $g \\circ f$ and $f \\circ g$.',
    answer: `
**Step 1:** Find $(g \\circ f)(x)$.
By definition, $(g \\circ f)(x) = g(f(x))$.
Substitute $f(x)$ into $g$:
$$ g(f(x)) = g(3x + 4) $$
Since $g(x) = x^2$, we replace $x$ with $(3x + 4)$:
$$ = (3x + 4)^2 $$
Expand the expression using $(a+b)^2 = a^2 + 2ab + b^2$:
$$ = (3x)^2 + 2(3x)(4) + 4^2 $$
$$ = 9x^2 + 24x + 16 $$

**Step 2:** Find $(f \\circ g)(x)$.
By definition, $(f \\circ g)(x) = f(g(x))$.
Substitute $g(x)$ into $f$:
$$ f(g(x)) = f(x^2) $$
Since $f(x) = 3x + 4$, we replace $x$ with $x^2$:
$$ = 3(x^2) + 4 $$
$$ = 3x^2 + 4 $$

**Final Answer:**
*   $(g \\circ f)(x) = 9x^2 + 24x + 16$
*   $(f \\circ g)(x) = 3x^2 + 4$
`
  },
  {
    id: 'q10b',
    title: 'Question 10(b)',
    part: 'B',
    module: '1',
    marks: 5,
    question: 'Determine whether the relation with the directed graph shown is an equivalence relation?',
    answer: `
An equivalence relation must be **reflexive**, **symmetric**, and **transitive**. Let's analyze the given directed graph.

**Step 1: Check Reflexivity**
A relation is reflexive if every node has a self-loop (an edge from the node to itself).
Looking at the graph, nodes $a, b, c,$ and $d$ all have self-loops.
$\\therefore$ The relation is **reflexive**.

**Step 2: Check Symmetry**
A relation is symmetric if for every edge $x \\rightarrow y$, there is a corresponding edge $y \\rightarrow x$.
In the graph:
*   Between $a$ and $b$, there are arrows in both directions ($a \\leftrightarrow b$).
*   Between $b$ and $c$, there are arrows in both directions ($b \\leftrightarrow c$).
*   Between $c$ and $d$, there are arrows in both directions ($c \\leftrightarrow d$).
*   Between $d$ and $a$, there are arrows in both directions ($d \\leftrightarrow a$).
$\\therefore$ The relation is **symmetric**.

**Step 3: Check Transitivity**
A relation is transitive if whenever $x \\rightarrow y$ and $y \\rightarrow z$, there must be an edge $x \\rightarrow z$.
Let's test a path in the graph:
*   We have an edge $a \\rightarrow b$.
*   We have an edge $b \\rightarrow c$.
*   For transitivity to hold, there **must** be an edge $a \\rightarrow c$.
However, looking at the graph, there is no direct edge between $a$ and $c$.
$\\therefore$ The relation is **not transitive**.

**Conclusion:**
Since the relation is not transitive, it is **not an equivalence relation**.
<directedgraph />
`
  },
  {
    id: 'q11a',
    title: 'Question 11(a)',
    part: 'B',
    module: '2',
    marks: 6,
    question: 'Using rules of inference to show that $\\neg p$ logically follows from the premises $(p \\rightarrow q) \\land (r \\rightarrow s), (q \\rightarrow t) \\land (s \\rightarrow u), \\neg(t \\rightarrow u), (p \\rightarrow r)$.',
    answer: `
**Premises:**
1.  $(p \\rightarrow q) \\land (r \\rightarrow s)$
2.  $(q \\rightarrow t) \\land (s \\rightarrow u)$
3.  $\\neg(t \\rightarrow u)$
4.  $p \\rightarrow r$

**Step-by-step Proof:**
| Step | Statement | Reason |
| :--- | :--- | :--- |
| 5. | $t \\land \\neg u$ | Logical equivalence of Premise 3: $\\neg(t \\rightarrow u) \\equiv \\neg(\\neg t \\lor u) \\equiv t \\land \\neg u$ |
| 6. | $\\neg u$ | Simplification from (5) |
| 7. | $s \\rightarrow u$ | Simplification from Premise 2 |
| 8. | $\\neg s$ | Modus Tollens using (7) and (6) |
| 9. | $r \\rightarrow s$ | Simplification from Premise 1 |
| 10. | $\\neg r$ | Modus Tollens using (9) and (8) |
| 11. | $p \\rightarrow r$ | Premise 4 |
| 12. | $\\neg p$ | Modus Tollens using (11) and (10) |

**Conclusion:**
$\\neg p$ logically follows from the given premises.
`
  },
  {
    id: 'q11b',
    title: 'Question 11(b)',
    part: 'B',
    module: '2',
    marks: 3,
    question: 'Find the argument form for the following argument and determine whether it is valid. Can we conclude that the conclusion is true if the premises are true?\\nIf Socrates is human, then Socrates is mortal.\\nSocrates is human.\\n∴ Socrates is mortal.',
    answer: `
**Step 1: Define the propositions.**
Let $H$: "Socrates is human"
Let $M$: "Socrates is mortal"

**Step 2: Write the argument form.**
Premise 1: $H \\rightarrow M$ (If Socrates is human, then Socrates is mortal)
Premise 2: $H$ (Socrates is human)
Conclusion: $\\therefore M$ (Socrates is mortal)

**Step 3: Determine validity.**
The argument form is:
$$ H \\rightarrow M $$
$$ H $$
$$ \\hline \\therefore M $$
This is the standard form of **Modus Ponens** (Law of Detachment), which is a universally valid rule of inference.

**Conclusion:**
Yes, the argument is valid. We can conclude that the conclusion is true if the premises are true.
`
  },
  {
    id: 'q12a',
    title: 'Question 12(a)',
    part: 'B',
    module: '2',
    marks: 4,
    question: 'Prove the given equivalence using truth table.\\n$(p \\land (p \\Leftrightarrow q)) \\rightarrow q \\equiv T$.',
    answer: `
We need to construct a truth table for the expression $(p \\land (p \\Leftrightarrow q)) \\rightarrow q$ and show that it evaluates to True (T) for all possible truth values of $p$ and $q$.

| $p$ | $q$ | $p \\Leftrightarrow q$ | $p \\land (p \\Leftrightarrow q)$ | $(p \\land (p \\Leftrightarrow q)) \\rightarrow q$ |
| :---: | :---: | :---: | :---: | :---: |
| T | T | T | T | **T** |
| T | F | F | F | **T** |
| F | T | F | F | **T** |
| F | F | T | F | **T** |

**Conclusion:**
Since the final column contains only 'T' (True) for all possible truth value assignments, the proposition is a tautology.
Therefore, $(p \\land (p \\Leftrightarrow q)) \\rightarrow q \\equiv T$.
`
  },
  {
    id: 'q12b',
    title: 'Question 12(b)',
    part: 'B',
    module: '2',
    marks: 5,
    question: 'Use rules of inference to show that if $\\forall x(P(x) \\rightarrow (Q(x) \\land S(x)))$ and $\\forall x(P(x) \\land R(x))$ are true, then $\\forall x(R(x) \\land S(x))$ is true.',
    answer: `
**Premises:**
1.  $\\forall x (P(x) \\rightarrow (Q(x) \\land S(x)))$
2.  $\\forall x (P(x) \\land R(x))$

**Step-by-step Proof:**
| Step | Statement | Reason |
| :--- | :--- | :--- |
| 3. | $P(c) \\land R(c)$ | Universal Instantiation from (2) for an arbitrary element $c$ |
| 4. | $P(c)$ | Simplification from (3) |
| 5. | $R(c)$ | Simplification from (3) |
| 6. | $P(c) \\rightarrow (Q(c) \\land S(c))$ | Universal Instantiation from (1) for the same element $c$ |
| 7. | $Q(c) \\land S(c)$ | Modus Ponens using (4) and (6) |
| 8. | $S(c)$ | Simplification from (7) |
| 9. | $R(c) \\land S(c)$ | Conjunction using (5) and (8) |
| 10. | $\\forall x (R(x) \\land S(x))$ | Universal Generalization from (9) since $c$ is arbitrary |

**Conclusion:**
$\\forall x (R(x) \\land S(x))$ is logically proven to be true.
`
  },
  {
    id: 'q13a',
    title: 'Question 13(a)',
    part: 'B',
    module: '3',
    marks: 5,
    question: 'Prove that $1^2 + 3^2 + 5^2 + \\dots + (2n+1)^2 = \\frac{(n+1)(2n+1)(2n+3)}{3}$ whenever n is a nonnegative integer, using mathematical induction.',
    answer: `
Let $P(n)$ be the statement: $1^2 + 3^2 + 5^2 + \\dots + (2n+1)^2 = \\frac{(n+1)(2n+1)(2n+3)}{3}$

**Step 1: Base Case ($n = 0$)**
LHS = $(2(0)+1)^2 = 1^2 = 1$
RHS = $\\frac{(0+1)(2(0)+1)(2(0)+3)}{3} = \\frac{(1)(1)(3)}{3} = 1$
Since LHS = RHS, $P(0)$ is true.

**Step 2: Inductive Hypothesis**
Assume $P(k)$ is true for some integer $k \\ge 0$.
$$ 1^2 + 3^2 + \\dots + (2k+1)^2 = \\frac{(k+1)(2k+1)(2k+3)}{3} $$

**Step 3: Inductive Step**
We must prove $P(k+1)$ is true.
Add the $(k+1)$-th term, which is $(2(k+1)+1)^2 = (2k+3)^2$, to both sides:
$$ \\text{LHS of } P(k+1) = \\left[ 1^2 + 3^2 + \\dots + (2k+1)^2 \\right] + (2k+3)^2 $$
Substitute the inductive hypothesis:
$$ = \\frac{(k+1)(2k+1)(2k+3)}{3} + (2k+3)^2 $$
Factor out the common term $(2k+3)$:
$$ = (2k+3) \\left[ \\frac{(k+1)(2k+1)}{3} + (2k+3) \\right] $$
Find a common denominator:
$$ = \\frac{2k+3}{3} \\left[ (k+1)(2k+1) + 3(2k+3) \\right] $$
Expand the terms inside the bracket:
$$ = \\frac{2k+3}{3} \\left[ (2k^2 + k + 2k + 1) + (6k + 9) \\right] $$
$$ = \\frac{2k+3}{3} \\left[ 2k^2 + 9k + 10 \\right] $$
Factor the quadratic equation $2k^2 + 9k + 10 = 2k^2 + 4k + 5k + 10 = 2k(k+2) + 5(k+2) = (k+2)(2k+5)$:
$$ = \\frac{(2k+3)(k+2)(2k+5)}{3} $$
Rearrange to match the RHS format for $n = k+1$:
$$ = \\frac{((k+1)+1)(2(k+1)+1)(2(k+1)+3)}{3} $$
This is exactly the RHS of $P(k+1)$.

**Conclusion:**
By the principle of mathematical induction, the statement is true for all nonnegative integers $n$.
`
  },
  {
    id: 'q13b',
    title: 'Question 13(b)',
    part: 'B',
    module: '3',
    marks: 4,
    question: 'Solve these recurrence relations together with the initial conditions given. $a_n = 4a_{n-1} - 4a_{n-2}$ for $n \\ge 2, a_0 = 6, a_1 = 8$.',
    answer: `
**Step 1: Write the characteristic equation.**
The recurrence relation is $a_n - 4a_{n-1} + 4a_{n-2} = 0$.
The characteristic equation is:
$$ r^2 - 4r + 4 = 0 $$

**Step 2: Find the roots.**
Factor the quadratic equation:
$$ (r - 2)^2 = 0 $$
The root is $r = 2$ with a multiplicity of 2.

**Step 3: Write the general solution.**
For a repeated root $r$, the general solution is:
$$ a_n = (C_1 + C_2 n) r^n $$
Substitute $r = 2$:
$$ a_n = (C_1 + C_2 n) 2^n $$

**Step 4: Use initial conditions to find constants.**
Given $a_0 = 6$:
$$ a_0 = (C_1 + C_2(0)) 2^0 $$
$$ 6 = C_1 \\implies C_1 = 6 $$

Given $a_1 = 8$:
$$ a_1 = (C_1 + C_2(1)) 2^1 $$
$$ 8 = (6 + C_2) \\cdot 2 $$
$$ 4 = 6 + C_2 \\implies C_2 = -2 $$

**Step 5: Write the final solution.**
Substitute $C_1 = 6$ and $C_2 = -2$ back into the general solution:
$$ a_n = (6 - 2n) 2^n $$
`
  },
  {
    id: 'q14a',
    title: 'Question 14(a)',
    part: 'B',
    module: '3',
    marks: 9,
    question: 'Find all solutions of the recurrence relation $a_n = -5a_{n-1} - 6a_{n-2} + 42 * 4^n$ with $a_1 = 56$ and $a_2 = 278$.',
    answer: `
This is a non-homogeneous linear recurrence relation: $a_n + 5a_{n-1} + 6a_{n-2} = 42 \\cdot 4^n$.
The solution is of the form $a_n = a_n^{(h)} + a_n^{(p)}$, where $a_n^{(h)}$ is the homogeneous solution and $a_n^{(p)}$ is the particular solution.

**Step 1: Find the homogeneous solution $a_n^{(h)}$.**
Characteristic equation: $r^2 + 5r + 6 = 0$.
$$ (r + 2)(r + 3) = 0 \\implies r_1 = -2, r_2 = -3 $$
$$ a_n^{(h)} = C_1(-2)^n + C_2(-3)^n $$

**Step 2: Find the particular solution $a_n^{(p)}$.**
Since the non-homogeneous part is $F(n) = 42 \\cdot 4^n$, we guess a particular solution of the form:
$$ a_n^{(p)} = A \\cdot 4^n $$
Substitute this into the recurrence relation:
$$ A \\cdot 4^n + 5(A \\cdot 4^{n-1}) + 6(A \\cdot 4^{n-2}) = 42 \\cdot 4^n $$
Divide the entire equation by $4^{n-2}$:
$$ A \\cdot 4^2 + 5A \\cdot 4^1 + 6A = 42 \\cdot 4^2 $$
$$ 16A + 20A + 6A = 42 \\cdot 16 $$
$$ 42A = 42 \\cdot 16 \\implies A = 16 $$
So, the particular solution is $a_n^{(p)} = 16 \\cdot 4^n = 4^2 \\cdot 4^n = 4^{n+2}$.

**Step 3: Write the general solution.**
$$ a_n = C_1(-2)^n + C_2(-3)^n + 16 \\cdot 4^n $$

**Step 4: Use initial conditions to find $C_1$ and $C_2$.**
Given $a_1 = 56$:
$$ C_1(-2)^1 + C_2(-3)^1 + 16(4^1) = 56 $$
$$ -2C_1 - 3C_2 + 64 = 56 $$
$$ -2C_1 - 3C_2 = -8 \\implies 2C_1 + 3C_2 = 8 \\quad \\text{--- (Eq 1)} $$

Given $a_2 = 278$:
$$ C_1(-2)^2 + C_2(-3)^2 + 16(4^2) = 278 $$
$$ 4C_1 + 9C_2 + 256 = 278 $$
$$ 4C_1 + 9C_2 = 22 \\quad \\text{--- (Eq 2)} $$

Multiply Eq 1 by 2:
$$ 4C_1 + 6C_2 = 16 \\quad \\text{--- (Eq 3)} $$
Subtract Eq 3 from Eq 2:
$$ (4C_1 + 9C_2) - (4C_1 + 6C_2) = 22 - 16 $$
$$ 3C_2 = 6 \\implies C_2 = 2 $$
Substitute $C_2 = 2$ into Eq 1:
$$ 2C_1 + 3(2) = 8 \\implies 2C_1 + 6 = 8 \\implies 2C_1 = 2 \\implies C_1 = 1 $$

**Step 5: Write the final solution.**
$$ a_n = 1 \\cdot (-2)^n + 2 \\cdot (-3)^n + 16 \\cdot 4^n $$
$$ a_n = (-2)^n + 2(-3)^n + 4^{n+2} $$
`
  },
  {
    id: 'q15a',
    title: 'Question 15(a)',
    part: 'B',
    module: '4',
    marks: 3,
    question: 'If (G,*) and (H,°) be groups with respective identities $e_G$ and $e_H$. Show that for the homomorphism $f: G \\rightarrow H$, $f(a^{-1}) = [f(a)]^{-1}$ for every $a \\in G$.',
    answer: `
**Step 1: State the property of the identity element under homomorphism.**
First, we establish that a homomorphism maps the identity of $G$ to the identity of $H$.
$$ f(e_G) = e_H $$
*(Proof: $f(e_G) = f(e_G * e_G) = f(e_G) \\circ f(e_G)$. Multiplying both sides by $[f(e_G)]^{-1}$ gives $e_H = f(e_G)$).*

**Step 2: Use the definition of an inverse in G.**
For any element $a \\in G$, its inverse $a^{-1}$ satisfies:
$$ a * a^{-1} = e_G \\quad \\text{and} \\quad a^{-1} * a = e_G $$

**Step 3: Apply the homomorphism $f$ to both sides.**
$$ f(a * a^{-1}) = f(e_G) $$
Since $f$ is a homomorphism, $f(x * y) = f(x) \\circ f(y)$. Therefore:
$$ f(a) \\circ f(a^{-1}) = e_H $$
Similarly, applying $f$ to the second equation:
$$ f(a^{-1} * a) = f(e_G) $$
$$ f(a^{-1}) \\circ f(a) = e_H $$

**Conclusion:**
The equations $f(a) \\circ f(a^{-1}) = e_H$ and $f(a^{-1}) \\circ f(a) = e_H$ exactly match the definition of an inverse in group $H$.
This means that $f(a^{-1})$ acts as the inverse of $f(a)$ in $H$.
Therefore, $f(a^{-1}) = [f(a)]^{-1}$.
`
  },
  {
    id: 'q15b',
    title: 'Question 15(b)',
    part: 'B',
    module: '4',
    marks: 6,
    question: 'Prove that the set {0,1,2,3,4,5} is a cyclic group of order 6 under addition modulo 6. Draw the composition table.',
    answer: `
Let $G = \\{0, 1, 2, 3, 4, 5\\}$ and the operation be $+_6$ (addition modulo 6).

**Step 1: Draw the composition table.**
| $+_6$ | 0 | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | 0 | 1 | 2 | 3 | 4 | 5 |
| **1** | 1 | 2 | 3 | 4 | 5 | 0 |
| **2** | 2 | 3 | 4 | 5 | 0 | 1 |
| **3** | 3 | 4 | 5 | 0 | 1 | 2 |
| **4** | 4 | 5 | 0 | 1 | 2 | 3 |
| **5** | 5 | 0 | 1 | 2 | 3 | 4 |

**Step 2: Verify Group Properties.**
1.  **Closure:** All entries in the table belong to $G$.
2.  **Associativity:** Addition modulo $n$ is always associative.
3.  **Identity:** The row and column for $0$ are identical to the header row and column. Thus, $0$ is the identity element.
4.  **Inverse:** Every row and column contains the identity $0$ exactly once.
    *   $0^{-1} = 0$
    *   $1^{-1} = 5$ (since $1+5=6 \\equiv 0$)
    *   $2^{-1} = 4$
    *   $3^{-1} = 3$
    *   $4^{-1} = 2$
    *   $5^{-1} = 1$
Thus, $(G, +_6)$ is a group of order 6.

**Step 3: Prove it is cyclic.**
A group is cyclic if there is an element $g \\in G$ such that $\\langle g \\rangle = G$. Let's check the powers (multiples under addition) of $1$:
*   $1 \\times 1 = 1$
*   $2 \\times 1 = 1 +_6 1 = 2$
*   $3 \\times 1 = 1 +_6 1 +_6 1 = 3$
*   $4 \\times 1 = 4$
*   $5 \\times 1 = 5$
*   $6 \\times 1 = 0$
Since the element $1$ generates all elements of $G$, $1$ is a generator. (Note: $5$ is also a generator).
$\\therefore$ The group is a cyclic group.
`
  },
  {
    id: 'q16a',
    title: 'Question 16(a)',
    part: 'B',
    module: '4',
    marks: 5,
    question: "State and prove Lagrange's theorem.",
    answer: `
**Statement:**
If $H$ is a subgroup of a finite group $G$, then the order of $H$ divides the order of $G$.
Mathematically, $|G| = [G:H] \\cdot |H|$, where $[G:H]$ is the index of $H$ in $G$ (the number of distinct left or right cosets).

**Proof:**
**Step 1: Define the terms.**
Let $|G| = n$ (the number of elements in $G$).
Let $|H| = m$ (the number of elements in $H$).
We need to prove that $m$ divides $n$.

**Step 2: Use Cosets.**
Consider the left cosets of $H$ in $G$. A left coset is defined as $aH = \\{ah \\mid h \\in H\\}$ for some $a \\in G$.
By the properties of cosets:
1.  **Partitioning:** The left cosets of $H$ partition the group $G$. This means every element of $G$ belongs to exactly one left coset, and the union of all distinct left cosets is $G$.
2.  **Equal Size:** Every left coset $aH$ has the exact same number of elements as $H$.
    *   *Proof of equal size:* Define a mapping $f: H \\rightarrow aH$ by $f(h) = ah$.
    *   $f$ is onto (surjective) by definition of $aH$.
    *   $f$ is one-to-one (injective) because if $ah_1 = ah_2$, then by left cancellation in a group, $h_1 = h_2$.
    *   Since $f$ is a bijection, $|aH| = |H| = m$.

**Step 3: Calculate the total elements.**
Let there be $k$ distinct left cosets of $H$ in $G$.
Since these $k$ cosets are mutually disjoint and their union is the entire group $G$, the total number of elements in $G$ is the sum of the number of elements in each distinct coset.
$$ |G| = |a_1H| + |a_2H| + \\dots + |a_kH| $$
Since each coset has $m$ elements:
$$ n = m + m + \\dots + m \\quad \\text{($k$ times)} $$
$$ n = k \\cdot m $$

**Conclusion:**
Since $n = k \\cdot m$ and $k$ is an integer (the number of cosets), it follows that $m$ divides $n$.
Therefore, the order of the subgroup $H$ divides the order of the group $G$.
`
  },
  {
    id: 'q16b',
    title: 'Question 16(b)',
    part: 'B',
    module: '4',
    marks: 4,
    question: 'Prove that the set $\\mathbb{Q}^+$ of all nonzero rational numbers forms a group under the operation of multiplication.',
    answer: `
Let $\\mathbb{Q}^+$ be the set of all strictly positive rational numbers. A rational number can be expressed as $p/q$ where $p, q$ are positive integers and $q \\neq 0$. The operation is standard multiplication $\\cdot$.

To prove it is a group, we must verify four properties:

**1. Closure:**
Let $a, b \\in \\mathbb{Q}^+$. Then $a = p_1/q_1$ and $b = p_2/q_2$ for some positive integers $p_1, q_1, p_2, q_2$.
$$ a \\cdot b = \\frac{p_1}{q_1} \\cdot \\frac{p_2}{q_2} = \\frac{p_1 p_2}{q_1 q_2} $$
Since the product of positive integers is a positive integer, $p_1 p_2$ and $q_1 q_2$ are positive integers.
Thus, $a \\cdot b \\in \\mathbb{Q}^+$. The set is closed under multiplication.

**2. Associativity:**
Multiplication of rational numbers is inherently associative.
For all $a, b, c \\in \\mathbb{Q}^+$, $a \\cdot (b \\cdot c) = (a \\cdot b) \\cdot c$.

**3. Identity Element:**
The number $1$ can be written as $1/1$, so $1 \\in \\mathbb{Q}^+$.
For any $a \\in \\mathbb{Q}^+$:
$$ a \\cdot 1 = 1 \\cdot a = a $$
Therefore, $1$ is the multiplicative identity element.

**4. Inverse Element:**
Let $a \\in \\mathbb{Q}^+$. Then $a = p/q$ where $p, q > 0$.
Consider the element $b = q/p$. Since $p, q > 0$, $b$ is also a positive rational number, so $b \\in \\mathbb{Q}^+$.
$$ a \\cdot b = \\frac{p}{q} \\cdot \\frac{q}{p} = \\frac{pq}{pq} = 1 $$
Thus, every element $a \\in \\mathbb{Q}^+$ has an inverse $a^{-1} = q/p$ in $\\mathbb{Q}^+$.

**Conclusion:**
Since all four group axioms (Closure, Associativity, Identity, Inverse) are satisfied, $(\\mathbb{Q}^+, \\cdot)$ forms a group.
`
  }
];

% Definición de hechos
padrehijo(tom, bob).
padrehijo(bob, alice).
padrehijo(bob, john).
padrehijo(alice, mary).

% Definición de reglas
abuelonieto(X, Y) :- padrehijo(X, Z), padrehijo(Z, Y).
ancestro(X, Y) :- padrehijo(X, Y).
ancestro(X, Y) :- padrehijo(X, Z), ancestro(Z, Y).

% Consultas de ejemplo
% ?- grandparent(tom, mary).
% ?- ancestro(bob, mary).
% ?- ancestro(tom, john).
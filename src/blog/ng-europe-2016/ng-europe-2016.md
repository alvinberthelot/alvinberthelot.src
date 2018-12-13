# ng-europe 2016

Petit retour personnel sur la conférence [ng-europe](https://ngeurope.org) ; la conférence européenne à propos d'[Angular](https://angularjs.org/) ; qui s'est déroulée sur 3 jours à Paris du 24 au 26 octobre 2016.

## Jour 1 : workshop

L'objectif du workshop "**From zero to hero: Build cross-platform solutions with Angular 2**" auquel j'ai participé était de faire réaliser aux participants une application Angular 2 capable de s'executer en tant qu'application web, mobile (Android, iOS, Windows Phone) et desktop (Linux, MacOS, Windows) avec une même base de code.

Je ne dirai pas que j'ai appris énormément sur Angular 2 lors de ce workshop car les objectifs étaient peut être trop ambitieux et les tâches à réaliser lors de cette journée était principalement axées sur l'installation de l'environnement de développement.

Je retiendrai tout de même ceci :

**[Angular 2 CLI](https://cli.angular.io/) reste une belle boîte noire** (buggée qui plus est) et il peut s'avérer très risqué de s'appuyer dessus si vous souhaitez réaliser des applications qui sortent du cadre classique. Ce qui était clairement le cas pour nos ambitions "cross-platform", donc c'est bien un build system custom (avec [Gulp](http://gulpjs.com/)) qui a été utilisé.

**[WebStorm](https://www.jetbrains.com/webstorm/) semble avoir gagné une première bataille sur la guerre des IDE** pour développer avec Angular2/TypeScript. C'était déjà une tendance, elle s'est confirmée.

L'atout du "cross-platform" a un réellement un atout supplémentaire avec l'arrivée d'[Electron](http://electron.atom.io/) pour publier des applications sur desktop. Si la priorité des clients/utilisateurs est bien le mobile, il faut bien comprendre que **le "Mobile first" ne signifie pas "Mobile only"**. Ce qui est loin d'être anodin lors des choix stratégiques et technologiques pour une entreprise.

Au delà de ça **le [dépôt de code mis à disposition](https://github.com/thinktecture/ngeurope-2016-workshop) est une mine d'informations** et je ne peux que vous recommander d'y jeter un oeil si vous souhaitez réaliser votre application en mode "cross-platform".

## Jour 2 & 3 : conférences

Je ne mentionnerai que les conférences qui m'ont vraiment marquées ou qui traitent d'un sujet qui semble primordial à mon sens.

### Getting to Angular 2

Cette conférence portait sur une migration d'Angular(1) vers Angular 2. Si il ne s'agissait pas du sujet le plus sexy de ces 2 jours, il n'en reste pas moins que c'est une vraie problématique qui concerne pas mal de monde.

L'approche consistait à réaliser **une migration en mode carpaccio plutôt qu'en mode big bang avec ngUpgrade**.

Vous pouvez retrouver la [vidéo Getting to Angular 2](https://www.youtube.com/watch?v=2b-tEis9k4M) si cette problématique vous concerne.

L'autre workshop de la conférence "Migrating to Angular 2" portait d'ailleurs uniquement sur ce sujet, et même si je n'y ai pas assisté l'approche proposée semble similaire. Je pense d'ailleurs décortiqué dans l'avenir les ressources mises à disposition dans ce workshop ([slides](https://speakerdeck.com/manfredsteyer/angular-migration-workshop) & [code](https://www.softwarearchitekt.at/post/2016/10/25/tutorial-migrating-from-angularjs-1-x-to-angular-2.aspx)).

### Typescript lastest

[TypeScript](https://www.typescriptlang.org/) est un méta-langage qui permet de "transpiler" du JavaScript en apportant des fonctionnalités au développement.

Ce méta-langage n'est pas une particularité d'Angular 2, il peut être utilisé pour tout projet avec des librairies JavaScript classiques.

Pour autant son utilisation a vraiment été pensé et intégré lors de la conception d'Angular 2. De ce fait Angular 2 est surement aujourd'hui un des frameworks les plus aboutis pour utiliser TypeScript à tel point qu'il **très fortement conseillé de l'utiliser** pour tout nouveau projet avec Angular 2.

L'essence de ce méta-langage repose essentiellement sur le fait de pouvoir "typer" ses propriétés, variables, et paramètres. Chose que l'on ne peut évidemment pas faire en Javascript.

En faisant cela dans son propre code ou en s'appuyant sur
des fichiers \*.d.ts (fichiers décorateurs de TypeScript) qui décrivent des API sur des librairies existantes. Vous allez être en mesure de :

* Consolider votre code JavaScript.
* Produire du code de manière bien plus efficiente.

C'était d'ailleurs l'approche du conférencier qui partait de projets écrits en JavaScript pour les réécrire en TypeScript.

Vous pouvez retrouver la [vidéo Typescript latest](https://www.youtube.com/watch?v=o8YI2hvassE) avec un "live-coding-review" fort instructif.

### New Insights into Angular 2 Applications with Augury

[Augury](https://augury.angular.io/) est un plugin Chrome dédié pour vous faciliter la compréhension de votre application Angular 2.

Avoir une bonne compréhension de ce qui se passe dans votre application Angular 2, c'est bien comprendre :

* L'injection des dépendances.
* La navigation au sein de l'application.
* Les détections de changement.

La [vidéo New Insights into Angular 2 Applications with Augury](https://www.youtube.com/watch?v=YaDFDGS3EFM) montre très bien comment traiter ces cas, avec notamment une représentation en graphe des dépendances des composants qui m'a bluffé.

### RxJS

* Angular & RxJS
* Reactive Music Apps in Angular and RxJS
* You will learn RxJS

[RxJS](https://github.com/Reactive-Extensions/RxJS), RxJS, RxJS. Il en a été question quasiment tout le temps et rares sont les conférences qui ne l'ont pas mentionnées même si le sujet était tout autre.

Le parti pris d'Angular 2 de s'appuyer dessus semble s'avérer payant aujourd'hui tant la communauté semble enthousiaste sur le paradigme et les fonctionnalités apportées.

Pas grand chose à dire de plus si ce n'est que cette librairie semble la grande gagnante de la programmation fonctionnelle réactive et qu'**il devient désormais incontournable d'apprendre à utiliser [RxJS](https://github.com/Reactive-Extensions/RxJS)**.

À ce sujet vous pouvez aller faire un tour sur la [documentation officielle](http://reactivex.io/rxjs/) et sur [RxMarbles](http://rxmarbles.com/) pour vous familiariser avec.

Si vous souhaitez comprendre le fonctionnement de RxJS je vous conseille la [vidéo You will learn RxJS](https://www.youtube.com/watch?v=uQ1zhJHclvs) où le conférencier réécrit "from scratch" les fondamentaux de RxJS.

Je vous conseille également de regarder, surtout pour son côté hypnotisante et rafraîchissante, la [vidéo Reactive Music Apps in Angular and RxJS](https://www.youtube.com/watch?v=-fPyfSAEZgk) qui expliquait l'utilisation de RxJS dans une application générant de la musique.

## Conclusion

Si je ne devais retenir qu'une chose de ces plusieurs jours sur cette nouvelle version d'Angular c'est que les choix de "partenariats technologiques" avec [TypeScript](https://www.typescriptlang.org/) et [RxJS](https://github.com/Reactive-Extensions/RxJS) s'avère au final très judicieux pour cette nouvelle version d'Angular2.

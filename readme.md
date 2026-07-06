# Informe Técnico de Justificación Metodológica
**Proyecto:** SmartBudget — Maqueta Funcional de Landing Page  
**Evaluación:** Módulo N°3: Desarrollo de la Interfaz de Usuario Web  
**Autor:** Francisco Menares  

---

### Justificación de la Metodología CSS Seleccionada
Para el desarrollo de la interfaz de SmartBudget, se seleccionó la metodología BEM (Block, Element, Modifier). 

* **Por qué se eligió:** Porque la encuentro mucho más simple y fácil de entender, BEM proporciona un sistema de clases altamente predecible y modular. Evita la sobreescritura accidental y la especificidad excesiva en las hojas de estilo. Además, como tenemos que mezclarlo con SASS, averiguando sería la opción más limpia para mantener los archivos HTML y CSS ordenados.
* **Ejemplo de aplicación en el código:**
  * **Bloque:** `.block-contents`
  * **Elemento:** `.block-contents__list`
  * **Modificador:** `.block-contents__list--checked`

### Arquitectura y Lógica de Carpetas con SASS (Patrón 7-1)
Se configuró el entorno con el preprocesador SASS/SCSS siguiendo estrictamente el estándar de arquitectura Patrón 7-1, lo que permite separar la lógica de estilos en archivos pequeños y especializados que luego se compilan en un único archivo CSS purificado:

```text
css/
├── style.css
├── style.css.map
│
img/
│
js/
│
sass/
│
├── abstracts/  
│   ├── _mixins.scss  
│   └── _variables.scss
│
├── base/             
│   ├── _base.scss      
│   └── _reset.scss
│   └── _typography.scss
│
├── components/       
│   ├── _blocks.scss    
│   ├── _cta.scss      
│   └── _faqs.scss
│   └── _features.scss
│   └── _hero.scss
│   └── _setup.scss
│   └── _testimonials.scss
├── layout/           
│   ├── _footer.scss
│   └── _header.scss
│   └── _section.scss
└── style.scss
│
└── index.html.scss
```

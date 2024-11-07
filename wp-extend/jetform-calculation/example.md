#

1. Create input fields
2. Add formulas with field name and make the calculated field value type "as String"
3. Use "" double quote for both variable and value

## Conditional Logic

("%type_of_work%" == "garage" ? "%garage_products%" == "Polyaspartique" ? 7*%area% : ("%garage_products%" == "Béton Poli" ? 12*%area%: 0) : 0)+("%type_of_work%" == "exterieur" ? "%exterior_products%" == "Polyaspartique" ? 13*%area% : ("%exterior_products%" == "Enduit Cimentaire" ? 20*%area%: ("%exterior_products%" == "Polyuréthane" ? 22*%area%: 0)) : 0)+("%type_of_work%" == "interieur" ? "%interior_products%" == "Époxy Métalique" ? 11*%area% : ("%interior_products%" == "Polyaspartique" ? 8*%area%: ("%interior_products%" == "Béton Poli" ? 15*%area%: 0)) : 0)

## Example Output from URL

Add shortcode to `function.php` file
"function get_query_var_shortcode($atts) {
$atts = shortcode_atts(
array(
'var' => '',
),
$atts
);

    $query_var = isset($_GET[$atts['var']]) ? sanitize_text_field($_GET[$atts['var']]) : '';
    return $query_var;

}
add_shortcode('query_var', 'get_query_var_shortcode');
"

Use `Text Editor` to collect the `URL params`
Proposition budgétaire de prix pour [query_var var="type_of_work"]

Pour le recouvrement de [query_var var="type_of_work"] de [query_var var="output"] pieds carrés, notre estimation budgétaire initiale est de :

$[query_var var="output"] CAD avant taxes.

(Hors coût de réparations)

Informations importantes :

Cette estimation est basée sur les données fournies et pourrait être ajustée après une évaluation sur site.
Le prix indiqué est valable uniquement pour les projets résidentiels.
Pensez à vérifier votre dossier de courriers indésirables, notre soumission pourrait s'y retrouver.

Ce qui est inclus dans votre estimation :

Une visite gratuite d’un de nos professionnels pour confirmer le prix final et la faisabilité des travaux.
Des matériaux de haute qualité fabriqué au Québec ainsi que des équipements de grade industriel.
Des applicateurs qualifiés et minutieux
Une couverture complète avec garanties, assurances et licences RBQ.

Ce qui n’est pas inclus dans votre estimation :

Les réparations de la surface.
Le retrait de revêtements existants (céramique, bois, peinture, époxy, etc.).
Les parois verticales et bordures extérieures.
La membrane pare-vapeur contre l’humidité (si nécessaire).
Le plan d’entretien prolongé.

Options de financement :

Possibilité de financer sur une période de 60 mois, avec des versements approximatif mensuels de [query_var var="financing"] $. Ajouter le logo financeit

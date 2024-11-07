<script>
    const buttons = document.querySelectorAll('.person-btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const personName = this.getAttribute('person');
    
    const selectField = document.getElementById('betreuer_auswahlen');

    console.log(personName);
    console.log(selectField);
    
    const matchingOption = Array.from(selectField.options)
      .find(option => option.textContent.trim() === personName);

    if (matchingOption) {
      selectField.value = matchingOption.value;
      selectField.dispatchEvent(new Event('change'));
    } else {
      console.error(`Person "${personName}" not found in the select field options.`);
    }
  });
});

const nextButton = document.querySelector('.jet-form-builder__next-page');

nextButton.addEventListener('click', function() {
    document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });

});
</script>
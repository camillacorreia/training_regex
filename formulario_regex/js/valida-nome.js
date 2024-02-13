export default function ehUmNome(campo) {
    const nome = campo.value
    const patternNome = /^(?!(.)\1\1)[A-Za-zA-ÿ -]{3,30}$/i.test(nome);
    // uma linha que não começa com três caracteres iguais consecutivos
    // e que contém entre 3 e 30 caracteres alfanuméricos, incluindo
    // espaços, hífens e caracteres acentuados
    console.log(patternNome);

    if (!patternNome) {

        campo.setCustomValidity('Não é um nome válido');
        console.log(`"${nome}" não é um nome válido`)

    }

    return nome
}
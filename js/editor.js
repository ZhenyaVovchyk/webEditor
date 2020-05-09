let htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/twilight");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.session.setUseWrapMode(true);
htmlEditor.setHighlightActiveLine(false);


let cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/twilight");
cssEditor.session.setMode("ace/mode/css");
cssEditor.session.setUseWrapMode(true);
cssEditor.setHighlightActiveLine(false);

let jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/twilight");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.session.setUseWrapMode(true);
jsEditor.setHighlightActiveLine(false);


htmlEditor.getSession().on('change', function() {
    update();
})
cssEditor.getSession().on('change', function() {
    update();
})
jsEditor.getSession().on('change', function() {
    update();
})

let res;

function update() {
    res = document.getElementById('result').contentWindow.document;
    res.open();
    res.write('<style>' + cssEditor.getValue() + '</style>');
    res.write('<script>' + jsEditor.getValue() + '</script>');
    res.write(htmlEditor.getValue());
    res.close();
}
update();

function update2() {
    res = document.getElementById('result').contentWindow.document;
    res.window.open();
    res.document.write(document.forms[0].elements[0].value);
    res.close();
}

htmlEditor.addEventListener("input", () => {
    let htmlSave = htmlEditor.getValue();
    localStorage.setItem('htmlSave', htmlSave);
});

cssEditor.addEventListener("input", () => {
    var cssSave = cssEditor.getValue();
    localStorage.setItem('cssSave', cssSave);
});

jsEditor.addEventListener("input", () => {
    let jsSave = jsEditor.getValue();
    localStorage.setItem('jsSave', jsSave);
});

window.onload = () => {
    let htmlSave = (localStorage.getItem("htmlSave"));
    let cssSave = (localStorage.getItem("cssSave"));
    let jsSave = (localStorage.getItem("jsSave"));
    htmlEditor.session.replace(new ace.Range(0, 0, 1, 1), htmlSave);
    cssEditor.session.replace(new ace.Range(0, 0, 1, 1), cssSave);
    jsEditor.session.replace(new ace.Range(0, 0, 1, 1), jsSave);
}


//-------------------------------Ю>

$('select').on('change', () => {
    let sel = $('select').val();

    if (sel == 'html-editor') {
        $('#html-editor').css('display', 'block');
        $('#css-editor').css('display', 'none');
        $('#js-editor').css('display', 'none');
    }

    if (sel == 'css-editor') {
        $('#html-editor').css('display', 'none');
        $('#css-editor').css('display', 'block');
        $('#js-editor').css('display', 'none');
    }

    if (sel == 'js-editor') {
        $('#html-editor').css('display', 'none');
        $('#css-editor').css('display', 'none');
        $('#js-editor').css('display', 'block');
    }
});

$('#html').on('click', () => {
    $('#html-editor').css('display', 'block');
    $('#css-editor').css('display', 'none');
    $('#js-editor').css('display', 'none');
    $('.result').css('display', 'none');
});

$('#css').on('click', () => {
    $('#html-editor').css('display', 'none');
    $('#css-editor').css('display', 'block');
    $('#js-editor').css('display', 'none');
    $('.result').css('display', 'none');
});

$('#js').on('click', () => {
    $('#html-editor').css('display', 'none');
    $('#css-editor').css('display', 'none');
    $('#js-editor').css('display', 'block');
    $('.result').css('display', 'none');
});

$('#resBtn').on('click', () => {
    $('#html-editor').css('display', 'none');
    $('#css-editor').css('display', 'none');
    $('#js-editor').css('display', 'none');
    $('.result').css('display', 'block');
});
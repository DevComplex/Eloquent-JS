function dominationDirection(str, data) {
    const scripts = {}

    let dominantScriptName = ""

    for(const ch of str) {
        if (ch === " ") {
            continue
        }

        const script = getScriptBasedOnCode(data, ch.charCodeAt(0))
        
        if (!script) {
            continue
        }

        if (!(script.name in scripts)) {
            scripts[script.name] = {count: 1, details: script}
        } else {
            scripts[script.name].count += 1
        }

        if (!dominantScriptName) {
            dominantScriptName = script.name
        } else if (scripts[dominantScriptName].count < scripts[script.name].count) {
            dominantScriptName = script.name
        }
    }

    return scripts[dominantScriptName].details.direction

}


function getScriptBasedOnCode(scripts, code) {
    return scripts.find(script => {
        const { ranges } = script

        for(const range of ranges) {
            const [start, end] = range

            if (code >= start && code <= end) {
                return true
            }
        }

        return false
    })
}
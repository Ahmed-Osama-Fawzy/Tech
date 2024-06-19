using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text.RegularExpressions;

class RegexHelper()
{
    private string Type;
    private Dictionary<string, string> MyPatterns = new Dictionary<string, string>();
    public RegexHelper() 
    {
        MyPatterns.Add("Name", "");
        MyPatterns.Add("Mobile", @"^\+20?\d{11,12,10,15}\d{1,15}$");
        MyPatterns.Add("Email", @"^[0-9]+\\s+([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)$");
        MyPatterns.Add("FloatNumber", "");
        MyPatterns.Add("IntNumber", "");
        MyPatterns.Add("Address", "");
        MyPatterns.Add("Normal Text", "");
        MyPatterns.Add("Spicail Text", "");
    }
    public RegexHelper(string text , string type)
    {
        Text = text;
        Type = type;
    }
    public Setdata(string text, string type)
    {
        Text = text;
        Type = type;
    }
    bool SelectedPattern()
    {
        if (MyPatterns.Keys.Contains(Type))
        {
            Regex regex = new Regex(MyPatterns[$"{Type}"]);
            return regex.IsMatch(text);
        }
        else
        {
            return false;
        }
    }
}
class Program
{
    static void Main()
    {
                    
    }
}
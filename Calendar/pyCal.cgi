#!/usr/bin/perl

sub write_cal {
    $add = @_[0];
	open (FILE, ">./calendars/$add");
	print FILE $ARGV{'cal'};
	close FILE;
	exit 0;
}

sub read_cal {

    ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
    $sTime = $hour*60*60 + $min*60 + $sec;
    print "$sTime\n\n";
    $add = @_[0];
	open (FILE, "<./calendars/$add");
	@cal = <FILE>;
	close FILE;
	foreach $line (@cal) {
		print $line;
	}
	exit 0;
}

print "Content-type: text/html\n\n";

if ( $ENV{'REQUEST_METHOD'} eq "GET" && $ENV{'QUERY_STRING'} ne '') 
{
	$form = $ENV{'QUERY_STRING'};
}
elsif ( $ENV{'REQUEST_METHOD'} eq "POST" ) 
{
	read(STDIN,$form, $ENV{'CONTENT_LENGTH'});
}

foreach $pair (split('&', $form))
{
	if ($pair =~ /(.*)=(.*)/) 
	{
		($key,$value) = ($1,$2);     # get key, value.
		$value =~ s/\+/ /g;  # substitute spaces for + signs.
		$value =~ s/%(..)/pack('c',hex($1))/eg;
		$ARGV{$key} = $value;   # Create Associative Array.
	}
}

open(FILE, '<./calendars/auth');
@file = <FILE>;
close FILE;

chomp(@file);
foreach $f (@file) {
	($a, $p) = split ', ', $f;
	if (crypt($ARGV{'addr'}, $a) eq $a) {
		if (crypt($ARGV{'pwd'}, $p) eq $p) {
			if ($ARGV{'mode'} eq "in") {
				write_cal($a);
			}
			if ($ARGV{'mode'} eq "out") {
				read_cal($a);
			}
		}
	}
}

print "<HTML><HEAD><TITLE>Denied</TITLE></HEAD><BODY>Denied</BODY></HTML>";
